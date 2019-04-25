import axios from 'axios';

export const callApi = async () => {
  const respose = await axios.get('http://www.mocky.io/v2/5cb9addf3000006d18bfa5f8')
  return respose.status;
}
