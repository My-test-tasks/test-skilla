const seed = (s: number) => {
  return () => {
    s = Math.sin(s) * 10000;
    return s - Math.floor(s);
  };
};

export default seed;
