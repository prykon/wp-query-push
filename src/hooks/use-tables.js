import useSWR from "swr";
import { fetcher } from "@/helpers";

const useTables = () => useSWR("../wp-json/wp-query-push/v1/tables", fetcher);
export default useTables;