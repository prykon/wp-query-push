import useSWR from "swr";
import { fetcher } from "@/helpers";

const useConnections = () => useSWR("/wp-json/wpquerypush/v1/connections", fetcher);
export default useConnections;