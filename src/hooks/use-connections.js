import useSWR from "swr";
import { fetcher } from "@/helpers";

const useConnections = () => useSWR("/wp-json/wp-query-push/v1/connections", fetcher);
export default useConnections;