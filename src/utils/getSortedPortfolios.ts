// src/utils/getSortedPortfolios.ts
import type { CollectionEntry } from "astro:content";
import getSortedEntries from "./getSortedEntries";

type DatedEntry = CollectionEntry<"blog"> | CollectionEntry<"portfolio">;

const getSortedPortfolios = <T extends DatedEntry>(
  entries: T[],
  filterFn?: (entry: T) => boolean
): T[] => {
  return getSortedEntries(entries, filterFn);
};

export default getSortedPortfolios;