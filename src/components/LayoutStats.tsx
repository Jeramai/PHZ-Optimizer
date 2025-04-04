import { Attribute, BuffType, TOYZ } from '@/lib/toyz';
import { Item } from '@/lib/types';
import { useMemo } from 'react';

export default function LayoutStats({ data }: Readonly<{ data: Item[] }>) {
  const statElements = useMemo(() => {
    if (!data?.length) return [];

    const stats = data.reduce((acc, element, i) => {
      const item = TOYZ[element.image];
      if (!item) return acc;

      item.buffs.forEach((buff, j) => {
        if (i === 0 || j % 2 === 0) {
          const { type, amount } = buff;
          acc.set(type, (acc.get(type) ?? 0) + amount);
        }
      });

      return acc;
    }, new Map<BuffType | Attribute, number>());

    return Array.from(stats)
      .sort(([nameA, amountA], [nameB, amountB]) => {
        // Define priority order for specific stats
        const priorityOrder = ['Basic', 'Boss', 'Skill', 'All', 'Crit D.'];

        const indexA = priorityOrder.indexOf(nameA);
        const indexB = priorityOrder.indexOf(nameB);

        // If both items are in priority list, sort by priority
        if (indexA !== -1 && indexB !== -1) {
          return indexA - indexB;
        }
        // If only one item is in priority list, it comes first
        if (indexA !== -1) return -1;
        if (indexB !== -1) return 1;

        // For all other items, sort by amount in descending order
        return amountB - amountA;
      })
      .map(([name, amount]) => (
        <div key={name}>
          <span>{name}: </span>
          <strong>{Number(amount.toFixed(2))}%</strong>
        </div>
      ));
  }, [data]);

  return statElements.length ? <div className='grid grid-cols-2 gap-x-5'>{statElements}</div> : null;
}
