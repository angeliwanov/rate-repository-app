export const numberFormatter = (num) => {
  return num > 999 ? (num / 1000).toFixed(1) + "K" : num;
};
