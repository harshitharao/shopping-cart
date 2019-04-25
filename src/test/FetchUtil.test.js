import React from 'react';
import axios from 'axios';
import { callApi } from  '../js/FetchUtil';
jest.mock('axios');

it('should assert on fetch of api call', async () => {
   axios.get.mockResolvedValue({status: 200});
   const bal = await callApi();
  expect(bal).toEqual(200);
  expect(axios.get).toHaveBeenCalledWith('http://www.mocky.io/v2/5cb9addf3000006d18bfa5f8');
});
