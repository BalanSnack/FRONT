import { fetchJoke } from "./test";
import type { JokeResponse } from "./test";

interface JokeRepository {
  findJoke(): Promise<JokeResponse>;
}

function findJoke(): Promise<JokeResponse> {
  return fetchJoke();
}

export default {
  findJoke,
} as JokeRepository;
