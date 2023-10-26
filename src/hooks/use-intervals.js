import useSWR from "swr";
import { fetcher } from "@/helpers";

const useIntervals = () => useSWR("../wp-json/wp-query-push/v1/intervals", fetcher); // Reason for double dots: https://github.com/zdmc23/wp-query-push/pull/9
export default useIntervals;