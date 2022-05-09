export async function fetchData(url) {
  let response = await fetch(`https://cors-anywhere.herokuapp.com/${url}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.status === 200) {
    return response.json();
  }
  throw new Error(response.status);
}
