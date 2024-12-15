const apiUrl = 'https://techbiz-api.vercel.app'

const fetchInfoUser = async () => {
  try {
    const response = await fetch(`${apiUrl}/SNAP`)

    const data = await response.json()

    return data
  } catch (error) {
    console.error(error)
  }
}

export { fetchInfoUser }
