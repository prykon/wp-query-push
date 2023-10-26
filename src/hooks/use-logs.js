import useSWR from "swr";
import { fetcher } from "@/helpers";

const useLogs = () => useSWR("../wp-json/wp-query-push/v1/logs", fetcher); // Reason for double dots: https://github.com/zdmc23/wp-query-push/pull/9
export default useLogs;