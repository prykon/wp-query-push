import useSWR from "swr";
import { fetcher } from "@/helpers";

const useApiHints = () => useSWR("../wp-json/wp-query-push/v1/get-api-hints", fetcher); // Reason for double dots: https://github.com/zdmc23/wp-query-push/pull/9
export default useApiHints;