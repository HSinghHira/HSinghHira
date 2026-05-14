import type { CollectionEntry } from "astro:content";
import postFilter from "./postFilter";
import getSortedEntries from "./getSortedEntries";

const getSortedPosts = (posts: CollectionEntry<"blog">[]) => {
  return getSortedEntries(posts, postFilter);
};

export default getSortedPosts;
