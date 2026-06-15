import MainButton from './UI/MainButton';

export const LandingItem = ({ item, deleteMutation, onEdit }: any) => (
  <li className='border p-4 rounded-xl flex justify-between items-center'>
    <div className='flex flex-col'>
      <span className='font-semibold'>{item.title}</span>
      <span className='text-sm text-gray-500'>{item.key}</span>
    </div>
    <div className='flex gap-4'>
      <MainButton
        onClick={() => onEdit(item)}
        intent={'black'}
        size={'small'}
        text='ویرایش'
      />
      <MainButton
        disabled={deleteMutation.isPending}
        onClick={() => deleteMutation.mutate(item._id)}
        intent={'white'}
        size={'small'}
        text='حذف'
      />
    </div>
  </li>
);
