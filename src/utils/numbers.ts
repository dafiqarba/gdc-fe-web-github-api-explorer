export const formatToK = (num: number) => {
  return num >= 1000 ? `${(num / 1000).toFixed(num % 1000 >= 100 ? 1 : 0)}k` : `${num}`
}
