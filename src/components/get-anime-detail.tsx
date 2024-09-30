import axios from "axios"

export async function getDetail() {
  const options = {
    method: "GET",
    url: "https://api.jikan.moe/v4/anime",
    params: {
      q: "Attack on Titan",
      limit: 5,
    },
  }

  try {
    const response = await axios.request(options)
    console.log(response.data)
  } catch (error) {
    console.error(error)
  }
}
