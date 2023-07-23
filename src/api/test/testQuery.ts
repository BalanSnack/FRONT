import { useQuery } from "@tanstack/react-query";
import { useApiError } from "../errors";
import JokeRepository from "./testRepository";

const { handleError } = useApiError();

export function useFindJoke() {
  return useQuery(["joke"], () => JokeRepository.findJoke(), {
    onError: handleError,
  });
}
