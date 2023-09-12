import { axiosInstance } from '@/axios/axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function usePatchFoodTrucks({ id }) {
  const queryClient = useQueryClient();
  const { mutate, data, isLoading, error, isSuccess, isError } = useMutation({
    mutationKey: ['patchFoodTruck'],
    mutationFn: async (data) => {
      const res = await axiosInstance.patch(`/api/api/foodtrucks/${id}`, data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ['getFoodTrucks'],
      });
    },
  });

  return {
    patchFoodTruck: mutate,
    isLoading,
    isSuccess,
    isError,
    error,
    data,
  };
}
