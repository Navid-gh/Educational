import { LandingItem } from './LandingItem';
import WithLoaderAndError from './WithLoaderAndError';

export const AdminLandingList = ({
  data,
  isLoading,
  isError,
  error,
  deleteMutation,
  onEdit,
}: any) => {
  return (
    <WithLoaderAndError {...{ data, isLoading, isError, error }}>
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold">لیست لندینگ ها</h2>
        <ul className="flex flex-col gap-3">
          {data?.map((item: any) => (
            <LandingItem
              key={item._id}
              item={item}
              deleteMutation={deleteMutation}
              onEdit={onEdit}
            />
          ))}
        </ul>
      </div>
    </WithLoaderAndError>
  );
};
