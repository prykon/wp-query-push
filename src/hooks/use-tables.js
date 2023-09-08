import useSWR from "swr";
import { fetcher } from "@/helpers";

const useTables = () => useSWR("/wp-json/wp_query_push/v1/tables", fetcher);
export default useTables;