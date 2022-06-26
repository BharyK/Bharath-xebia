import axios from 'axios';

const API_BASE = 'https://dummy.restapiexample.com/api/';

const headers = {
  'Content-Type': 'application/json',
  'Ocp-Apim-Subscription-Key': 'ee133dc58c6d47c5a32cdaea7490820c',
  'Ocp-Apim-Trace': true,
  "Access-Control-Allow-Origin" :  "*",
};

export async function getRequest(path, params) {
  const res = await axios.get(API_BASE + path, { headers, params });
  return res;
}

export async function postRequest(path, body) {
  const res = await axios.post(API_BASE + path, body, { headers });
  return res;
}

export async function deleteRequest(path, params) {
  const res = await axios.delete(API_BASE + path, { headers, params });
  return res;
}
