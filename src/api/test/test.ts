import { createHttpCilent } from "@/lib/http-client";

const instance = createHttpCilent()
  .setBaseUrl("https://official-joke-api.appspot.com/random_joke")
  .build();

export interface JokeResponse {
  type: string;
  setup: string;
  punchline: string;
  id: number;
}

export const fetchJoke = (): Promise<JokeResponse> => {
  return instance.get("");
};
