import type { CustomError } from '@makers/api';
import { api } from '@makers/api';
import type { UseQueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';

interface NotificationResponse {
  id: string;
  memberId: string;
  content: string;
  type: 'DOCUMENT' | 'ATTENDANCE' | 'SESSION' | 'NONE';
  isRead: boolean;
}

export const getNotification = () => api.get<NotificationResponse>(`/v1/notifications`);

export const useGetNotification = (options?: UseQueryOptions<NotificationResponse, CustomError>) => {
  return useQuery({
    queryKey: ['notifications'],
    queryFn: getNotification,
    ...options,
  });
};
