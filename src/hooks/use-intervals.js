import useSWR from "swr";
import { fetcher } from "@/helpers";
import { BASE_URL } from "@/constants";
const useIntervals = () => useSWR(`${BASE_URL}/intervals`, fetcher);
export default useIntervals;
