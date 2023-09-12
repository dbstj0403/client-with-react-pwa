import { axiosInstance } from '@/axios/axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useDeleteFoodTrucks({ id }) {
  const queryClient = useQueryClient();
  const { mutate, data, isLoading, error, isSuccess, isError } = useMutation({
    mutationKey: ['deleteFoodTruck'],
    mutationFn: async () => {
      const res = await axiosInstance.delete(`/api/api/foodtrucks/${id}`);
      return res.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ['getFoodTrucks'],
      });
    },
  });

  return {
    deleteFoodTruck: mutate,
    isLoading,
    isSuccess,
    isError,
    error,
    data,
  };
}
