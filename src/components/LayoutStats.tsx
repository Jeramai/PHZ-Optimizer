import { ADJACENCY } from '@/lib/enums';
import { Attribute, BuffType, TOYZ } from '@/lib/toyz';
import { Item } from '@/lib/types';
import { useMemo } from 'react';

export default function LayoutStats({ data }: Readonly<{ data: Item[] }>) {
  const getColorBonus = useMemo(() => {
    const bonusMap: Record<string, [BuffType, number]> = {
      Grey: ['Basic', 3],
      Red: ['Boss', 2],
      Orange: ['Skill', 2],
      Blue: ['All', 2],
      Purple: ['Crit D.', 2]
    };
    return (color: string): [BuffType, number] | undefined => bonusMap[color];
  }, []);

  const statElements = useMemo(() => {
    if (!data?.length) return [];

    const stats = new Map<BuffType | Attribute, number>();

    // Process item buffs
    data.forEach((element) => {
      const item = TOYZ[element.image];
      if (!item) return;

      item.buffs.forEach(({ type, amount }) => {
        stats.set(type, (stats.get(type) ?? 0) + amount);
      });
    });

    // Process adjacency bonuses
    ADJACENCY.forEach(([posIndexA, borderA, posIndexB, borderB]) => {
      const itemA = data[posIndexA];
      const itemB = data[posIndexB];
      const colorA = itemA?.colors[borderA] as string;
      const colorB = itemB?.colors[borderB] as string;

      if (colorA === 'Black' || colorB === 'Black' || colorA !== colorB || !colorA) return;

      const bonus = getColorBonus(colorA);
      if (bonus) {
        const [type, amount] = bonus;
        stats.set(type, (stats.get(type) ?? 0) + amount);
      }
    });

    const priorityOrder = ['Basic', 'Boss', 'Skill', 'All', 'Crit D.'];

    return Array.from(stats.entries())
      .sort(([nameA, amountA], [nameB, amountB]) => {
        const indexA = priorityOrder.indexOf(nameA);
        const indexB = priorityOrder.indexOf(nameB);

        if (indexA !== -1 && indexB !== -1) return indexA - indexB;
        if (indexA !== -1) return -1;
        if (indexB !== -1) return 1;
        return amountB - amountA;
      })
      .map(([name, amount]) => (
        <div key={name}>
          <span>{name}: </span>
          <strong>{Number(amount.toFixed(2))}%</strong>
        </div>
      ));
  }, [data, getColorBonus]);

  return statElements.length ? <div className='grid grid-cols-2 gap-x-5'>{statElements}</div> : null;
}
