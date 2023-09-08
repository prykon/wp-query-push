import useSWR from "swr";
import { fetcher } from "@/helpers";

const useIntervals = () => useSWR("/wp-json/wp_query_push/v1/intervals", fetcher);
export default useIntervals;