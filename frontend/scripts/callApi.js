export default async function callApi() {
  const url = 'http://localhost:3001/'
  const result = await fetch(url);
  const respInJsonFormat = await result.json();
  console.log(`API response: ${respInJsonFormat.date}`);
  return respInJsonFormat;
}