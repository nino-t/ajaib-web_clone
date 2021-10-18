export interface Stock {
  id: string
  title: string
  price: number
  changeNumber: number
  changePercentage: number
}

export interface StocksState {
  status: 'idle' | 'loading' | 'failed'
  stocks: Stock[]
}