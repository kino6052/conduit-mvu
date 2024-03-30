import { filterUnique } from "../utils/utils";

export const processTags = (tagsInput: string) =>
  tagsInput
    .split(",")
    .join(" ")
    .split(" ")
    .filter(Boolean)
    .filter(filterUnique)
    .map((sub) => ({
      text: sub,
      id: sub,
    }));
