import useSWR from "swr";
import { fetcher } from "@/helpers";

const useApiHints = () => useSWR("/wp-json/wp-query-push/v1/get-api-hints", fetcher);
export default useApiHints;