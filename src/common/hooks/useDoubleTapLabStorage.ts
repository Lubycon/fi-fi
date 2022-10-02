import { doGet } from 'browser-toolkit';
import { useQuery } from 'react-query';

/**
 * Lubycon/double-tap-lab-storage에 접근하여 file을 가져올 수 있는 훅입니다.
 *
 * 외부에서 값을 가져오기 때문에 반환 타입이 추론되지 않으니, 반드시 Generic Parameter를 사용하여 반환 타입을 명시해주세요.
 *
 * @example
 * ```ts
 * const { data, isLoading } = useDoubleTapLabStorage<SelectValue[]>('interviewers/grades.json');
 * ```
 */
export function useDoubleTapLabStorage<T>(path: string) {
  return useQuery(['storageData', path], async () => {
    return (await doGet<T>(`https://raw.githubusercontent.com/Lubycon/double-tap-lab-storage/main/${path}`)).body;
  });
}
