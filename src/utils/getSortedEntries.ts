type DatedEntry = {
  data: {
    pubDatetime?: Date | null;
    modDatetime?: Date | null;
    draft?: boolean;
  };
};

const getSortedEntries = <T extends DatedEntry>(
  entries: T[],
  filterFn?: (entry: T) => boolean
): T[] => {
  return entries
    .filter((entry) => (filterFn ? filterFn(entry) : !entry.data.draft))
    .sort((a, b) => {
      const dateA = a.data.modDatetime ?? a.data.pubDatetime ?? new Date(0);
      const dateB = b.data.modDatetime ?? b.data.pubDatetime ?? new Date(0);
      return dateB.getTime() - dateA.getTime();
    });
};

export default getSortedEntries;
