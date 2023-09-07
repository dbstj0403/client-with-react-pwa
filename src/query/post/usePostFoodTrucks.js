import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function usePostFoodTrucks() {
  const queryClient = useQueryClient();
  const { mutate, data, isLoading, error, isSuccess } = useMutation({
    mutationKey: ['addFoodTruck'],
    mutationFn: async (data) => {
      const res = await axiosInstance.post('/api/foodtrucks', data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ['getFoodTrucks'],
      });
    },
  });

  return {
    addFoodTruck: mutate,
    isLoading,
    isSuccess,
    error,
    data,
  };
}
