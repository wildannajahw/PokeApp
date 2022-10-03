import { Move } from '../../../api/types';
import { TYPE } from '../../../constant/pokemonType';
import { Badge } from '../BadgeType';

interface PokeMoveProps {
  moves?: Move[];
}

export default function PokeMoves({ moves }: PokeMoveProps) {
  return (
    <div>
      <div className='relative max-h-[26rem] overflow-y-auto'>
        <table className='w-full text-sm border-l border-separate border-spacing-0'>
          <thead className='sticky top-0 text-left bg-white dark:bg-dark-card'>
            <tr className='[&_>_:nth-child(n_+_2)]:text-center'>
              <th className='border-t border-b-2 border-r px-2 py-1.5'>Name</th>
              <th className='border-t border-b-2 border-r px-2 py-1.5'>Type</th>
              <th className='border-t border-b-2 border-r px-2 py-1.5'>Cat.</th>
              <th className='border-t border-b-2 border-r px-2 py-1.5'>Power</th>
              <th className='border-t border-b-2 border-r px-2 py-1.5'>Acc.</th>
              <th className='border-t border-b-2 border-r px-2 py-1.5'>PP</th>
              <th className='border-t border-b-2 border-r px-2 py-1.5'>Learn By</th>
            </tr>
          </thead>
          <tbody>
            {moves?.map(({ pokemon_v2_move: move, level }) => {
              const {
                name,
                type_id: typeID,
                pokemon_v2_movedamageclass: damage,
                power,
                accuracy,
                pp,
                pokemon_v2_machines: machines,
              } = move;
              const item = machines[machines.length - 1]?.pokemon_v2_item.name;
              const moveType = TYPE[typeID as unknown as keyof typeof TYPE];
              return (
                <tr key={name} className='hover:bg-slate-50 [&_>_:nth-child(n_+_3)]:text-center'>
                  <td className='px-2 py-1 border-b border-r whitespace-nowrap'>{name}</td>
                  <td className='px-2 py-1 mx-auto border-b border-r'>
                    <Badge type={moveType} />
                  </td>
                  <td className='px-2 py-1 border-b border-r' title={damage.name}>
                    {{
                      physical: '🤛',
                      status: '🔰',
                      special: '🌀',
                    }[damage.name] || '–'}
                  </td>
                  <td className='px-2 py-1 border-b border-r'>{power || '–'}</td>
                  <td className='px-2 py-1 border-b border-r'>{accuracy ? `${accuracy}%` : '–'}</td>
                  <td className='px-2 py-1 border-b border-r'>{pp || '–'}</td>
                  <td className='px-2 py-1 border-b border-r'>
                    {level ? `lvl ${level}` : item ? `${item}` : '–'}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
