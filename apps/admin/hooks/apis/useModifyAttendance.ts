// attendanceId

import type { CustomError } from '@makers/api';
import { api } from '@makers/api';
import type { UseMutationOptions } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';

import type { ATTENDANCE_STATUS } from '~/constants/attendance';

// /v1/attendances/{attendanceId}

interface ModifyAttendanceRequest {
  attendanceStatus: ATTENDANCE_STATUS;
  attendanceId: string;
}

interface ModifyAttendanceResponse {
  attendanceId: string;
  generation: number;
  week: number;
  memberId: string;
  attendanceStatus: ATTENDANCE_STATUS;
  attendanceTime: string;
}

const modifyAttendance = async (request: ModifyAttendanceRequest): Promise<ModifyAttendanceResponse> => {
  return await api.put<ModifyAttendanceResponse>(`/v1/attendances/${request.attendanceId}`, request);
};

export const useModifyAttendance = (
  options?: UseMutationOptions<ModifyAttendanceResponse, CustomError, ModifyAttendanceRequest>,
) =>
  useMutation({
    mutationFn: modifyAttendance,
    ...options,
  });
