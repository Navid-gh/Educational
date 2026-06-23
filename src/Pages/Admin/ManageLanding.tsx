import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import {
  addLanding,
  editLanding,
  removeLanding,
} from '../../api/setters/landingAPI';
import { getLanding } from '../../api/getters/landingAPI';
import { AdminLandingForm } from '../../Components/AdminLandingForm';
import { AdminLandingList } from '../../Components/AdminLandingList';
import useAuth from '../../hooks/useAuth';
import { useAuthHooks } from '../../hooks/useAuthHooks';
import MainHeader from '../../Components/UI/MainHeader';

const ManageLanding = () => {
  const queryClient = useQueryClient();
  const { token } = useAuth();
  const auth = useAuthHooks();

  const [selectedLanding, setSelectedLanding] = useState<any | null>(null);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['landings'],
    queryFn: getLanding,
  });

  const addMutation = useMutation({
    mutationFn: (payload: any) => addLanding({ token, ...auth }, payload),
    onSuccess: () => {
      toast.success('لندینگ جدید اضافه شد');
      queryClient.invalidateQueries({ queryKey: ['landings'] });
    },
    onError: () => toast.error('خطا در افزودن لندینگ'),
  });

  const editMutation = useMutation({
    mutationFn: (payload: any) =>
      editLanding({ token, ...auth }, selectedLanding._id, payload),
    onSuccess: () => {
      toast.success('لندینگ ویرایش شد');
      queryClient.invalidateQueries({ queryKey: ['landings'] });
      setSelectedLanding(null);
    },
    onError: () => toast.error('خطا در ویرایش لندینگ'),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => removeLanding({ token, ...auth }, id),
    onSuccess: () => {
      toast.success('لندینگ حذف شد');
      queryClient.invalidateQueries({ queryKey: ['landings', 'admin'] });
    },
    onError: () => toast.error('خطا در حذف لندینگ'),
  });

  return (
    <div className="flex flex-col gap-10 p-6">
      <MainHeader>مدیریت صفحه لندینگ</MainHeader>

      <AdminLandingForm
        selectedLanding={selectedLanding}
        setSelectedLanding={setSelectedLanding}
        addMutation={addMutation}
        editMutation={editMutation}
      />

      <AdminLandingList
        data={data}
        isLoading={isLoading}
        isError={isError}
        error={error}
        deleteMutation={deleteMutation}
        onEdit={setSelectedLanding}
      />
    </div>
  );
};

export default ManageLanding;
