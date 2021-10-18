export const fetchStocks = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/stocks`,
      {
        method: 'GET',
      }
    )
    return response.json()
  } catch (error) {
    console.log('error', error)
  }
}