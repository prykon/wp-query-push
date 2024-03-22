import useSWR from "swr";
import { fetcher } from "@/helpers";
import { BASE_URL } from "@/constants";
const useCronEvents = () => useSWR(`${BASE_URL}/cron-events`, fetcher);
export default useCronEvents;
