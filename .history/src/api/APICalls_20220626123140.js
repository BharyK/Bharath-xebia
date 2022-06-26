import axios from 'axios';

const API_BASE = 'https://dummy.restapiexample.com/api/';

const headers = {
  'Content-Type': 'application/json',
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
