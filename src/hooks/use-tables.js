import useSWR from "swr";
import { fetcher } from "@/helpers";
import { BASE_URL } from "@/constants";
const useTables = () => useSWR(`${BASE_URL}/tables`, fetcher);
export default useTables;
