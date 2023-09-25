import useSWR from "swr";
import { fetcher } from "@/helpers";

const useLogs = () => useSWR("/wp-json/wp-query-push/v1/logs", fetcher);
export default useLogs;