interface Props {
  count: number;
}

export const getGameResult = ({ count }: Props): number => {
  let result = 0;

  for (let i = 0; i < count; i++) {
    const game = Math.floor(Math.random() * 10);
    if (game >= 4) {
      result++;
    }
  }

  return result;
};
