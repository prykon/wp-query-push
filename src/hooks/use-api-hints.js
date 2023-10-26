import useSWR from "swr";
import { fetcher } from "@/helpers";
import { BASE_URL } from "@/constants";
const useApiHints = () => useSWR(`${BASE_URL}/get-api-hints`, fetcher);
export default useApiHints;
