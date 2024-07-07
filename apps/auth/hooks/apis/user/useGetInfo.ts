import type { CustomError } from '@makers/api';
import { api } from '@makers/api';
import type { UseQueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';

type Role = 'ORGANIZER' | 'MEMBER';

interface GetInfoResponse {
  id: string;
  name: string;
  email: string;
  generations: {
    generationId: number;
    role: Role;
    position: string;
  }[];
}

export const getInfoByToken = async (token: string): Promise<GetInfoResponse> => {
  return await api.get<GetInfoResponse>('/v1/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getUserRoleByToken = async (token: string): Promise<Role> => {
  const { generations } = await getInfoByToken(token);

  return generations[0].role;
};

const getInfo = () => api.get<GetInfoResponse>('/v1/me');

export const useGetInfo = (options?: UseQueryOptions<GetInfoResponse, CustomError>) =>
  useQuery({
    queryKey: ['me'],
    queryFn: () => getInfo(),
    ...options,
  });
