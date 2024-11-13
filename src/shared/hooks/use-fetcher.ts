import axios from "axios";
import useSWR from "swr";
import { HttpClient } from "../services/http-client";
import { fetcher } from "../utils/fetcher";

export function useFetcher<R>(baseUrl: string, path: string) {
	const httpClient = HttpClient(axios, baseUrl);

	const httpResponse = useSWR<R>(fetcher<R>(httpClient, path));

	return {
		...httpResponse,
	};
}
