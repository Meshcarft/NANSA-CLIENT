// TODO: API 연동 시 useQuery로 교체
// import { useQuery } from "@tanstack/react-query";
// import { fetchJobs } from "./job-api";
// import { jobKeys } from "./query-keys";

import type { ItemState, ListState } from "@/shared/types";
import { MOCK_JOBS } from "../model/mock";
import type { Job } from "../model/types";

export function useJobs(): ListState<Job> {
  return {
    data: MOCK_JOBS,
    isPending: false,
  };
}

export function useJob(id: string): ItemState<Job> {
  return {
    data: MOCK_JOBS.find((job) => job.id === id),
    isPending: false,
  };
}
