import { useQuery } from '@tanstack/react-query';

export default function useGetFoodTrucks() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['getFoodTrucks'],
    queryFn: async () => {
      const res = await axiosInstance.get('/api/foodtrucks');
      return res.data;
    },
  });

  return {
    getFoodTrucks: data || null,
    isLoading,
    error,
  };
}
