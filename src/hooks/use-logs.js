import useSWR from "swr";
import { fetcher } from "@/helpers";
import { BASE_URL } from "@/constants";
const useLogs = () => useSWR(`${BASE_URL}/logs`, fetcher);
export default useLogs;
