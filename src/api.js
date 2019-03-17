export async function queryApi(item) {
  const url = `https://swapi.dev/api/${item}`
  const response = await fetch(url)
  // await sleep()
  console.log(response)
  if (response.ok) {
    const {results} = await response.json()
    if (results) {
      return results
    } else {
      return Promise.reject(Error("Not found page"))
    }
  } else {
    const error = {message: "uncuccessfull response"}
    return Promise.reject(error)
  }
}

// eslint-disable-next-line no-unused-vars
function sleep(ms = 3000) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
