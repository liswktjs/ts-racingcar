export const getGameWinner = (carObject: Record<string, number>) => {
  const winners = Object.entries(carObject).reduce<{
    maxValue: number | null;
    keys: string[];
  }>(
    (acc, [key, value]) => {
      if (acc.maxValue === null) {
        return { maxValue: value, keys: [key] };
      }
      if (value > acc.maxValue) {
        return { maxValue: value, keys: [key] };
      }
      if (value === acc.maxValue) {
        acc.keys.push(key);
      }
      return acc;
    },
    { maxValue: null, keys: [] }
  );
  return winners.keys;
};
