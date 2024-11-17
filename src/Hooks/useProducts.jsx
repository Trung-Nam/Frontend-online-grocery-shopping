import { useQuery } from '@tanstack/react-query';
import instance from '../utils/axiosInstance';

const useProducts = () => {
    const {data: products =[], isPending: loading, refetch} = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await instance.get('/products');
            return res.data;
          },
    })

  return [products, loading, refetch]
}

export default useProducts