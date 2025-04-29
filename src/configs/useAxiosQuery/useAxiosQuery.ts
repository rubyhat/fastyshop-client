import { AxiosError } from "axios";
import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
  QueryKey,
} from "@tanstack/react-query";

import { ApiErrorResponse } from "../../shared/interfaces";

/**
 * Унифицированный хук для выполнения запросов с axios + React Query
 */
export function useAxiosQuery<TData>(
  options: UseQueryOptions<
    TData,
    AxiosError<ApiErrorResponse>,
    TData,
    QueryKey
  >,
): UseQueryResult<TData, AxiosError<ApiErrorResponse>> {
  return useQuery<TData, AxiosError<ApiErrorResponse>, TData, QueryKey>(
    options,
  );
}
