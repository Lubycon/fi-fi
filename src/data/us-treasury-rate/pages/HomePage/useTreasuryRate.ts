import { doGet } from 'browser-toolkit';
import { useQuery } from 'react-query';

export const useTreasuryRate = (year: number) => {
  return useQuery(
    ['usTreasuryRate', year],
    async () => (await doGet<{ date: string; rate: number }>(`/api/us-treasury-rate/${year}`)).body,
    {
      refetchInterval: false,
      refetchOnWindowFocus: false,
    }
  );
};
