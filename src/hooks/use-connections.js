import useSWR from "swr";
import { fetcher } from "@/helpers";

const useConnections = () => useSWR("/wp-json/wp_query_push/v1/connections", fetcher);
export default useConnections;