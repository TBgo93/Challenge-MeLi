const getNumberWithDecimals = (number) => {
  let [amount,decimals] = number.toFixed(2).split('.')
  amount = Number(amount)
  decimals = Number(decimals)
  return [amount, decimals]
}

export default getNumberWithDecimals