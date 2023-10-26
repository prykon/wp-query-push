import useSWR from "swr";
import { fetcher } from "@/helpers";

const useIntervals = () => useSWR("../wp-json/wp-query-push/v1/intervals", fetcher);
export default useIntervals;