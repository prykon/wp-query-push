import useSWR from "swr";
import { fetcher } from "@/helpers";

const useLogs = () => useSWR("/wp-json/wp_query_push/v1/logs", fetcher);
export default useLogs;