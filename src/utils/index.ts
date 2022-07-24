const addZeros = (val: number) => (val >= 10 ? val : `0${val}`);

const formatSeconds = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const restSeconds = seconds - minutes * 60;

  return `${minutes}:${addZeros(restSeconds)}`;
};

export { formatSeconds };
