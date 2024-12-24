export const useGetMarketName = (): string => {
  let savedMarketName = localStorage.getItem('market-name')

  while (!savedMarketName && !savedMarketName?.length) {
    const marketName = prompt("Do'kon nomini kiriting!")
    savedMarketName = marketName
    localStorage.setItem('market-name', JSON.stringify(marketName))
  }

  return JSON.parse(savedMarketName)
}