import useSWR from "swr";
import { fetcher } from "@/helpers";
import { BASE_URL } from "@/constants";
const useConnections = () => useSWR(`${BASE_URL}/connections`, fetcher);
export default useConnections;
