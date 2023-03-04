import useSWR from "swr";
import { fetcher } from "@/helpers";

const useLogs = () => useSWR("/wp-json/wpquerypush/v1/logs", fetcher);
export default useLogs;