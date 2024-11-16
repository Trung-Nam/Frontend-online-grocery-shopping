import { useQuery } from '@tanstack/react-query';
import instance from '../utils/axiosInstance';

const useCategories = () => {
    const {data: categories =[], isPending: loading, refetch} = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await instance.get('/categories');
            // console.log(res.data)
            return res.data;
          },
    })

  return [categories, loading, refetch]
}

export default useCategories