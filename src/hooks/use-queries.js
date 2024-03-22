import useSWR from "swr";
import { fetcher } from "@/helpers";
import { BASE_URL } from "@/constants";
const useQueries = () => useSWR(`${BASE_URL}/queries`, fetcher);
export default useQueries;
