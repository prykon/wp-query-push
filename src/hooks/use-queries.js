import useSWR from "swr";
import { fetcher } from "@/helpers";
import { BASE_URL } from "@/constants";
const useQueries = () => useSWR(`${BASE_URL}/get-queries`, fetcher);
console.log(useQueries);
export default useQueries;
