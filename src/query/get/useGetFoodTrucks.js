import { axiosInstance } from '@/axios/axios';
import { useQuery } from '@tanstack/react-query';

export default function useGetFoodTrucks() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['getFoodTrucks'],
    queryFn: async () => {
      const res = await axiosInstance.get('/api/api/foodtrucks');
      return res.data.data.foodTrucks;
    },
  });

  return {
    getFoodTrucks: data || [],
    isLoading,
    error,
  };
}
