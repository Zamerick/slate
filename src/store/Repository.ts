import axios from 'axios';

export const API = axios.create({
  baseURL: process.env.VUE_APP_API_URL
});

export async function get (resource: string) {
  try {
    const response = await API.get(resource);
    return response.data;
  } catch (err) {
    console.log(err); // replace with better error logging solution.
  }
}

export async function post (resource: string, payload: any) {
  try {
    const response = await API.post(resource, payload);
  } catch (err) {
    console.log(err); // replace with better error logging solution.
  }
}

export async function put (resource: string, payload: any) {
  try {
    const response = await API.put(payload.postEndpoint, payload.data);
  } catch (err) {
    console.log(err); // replace with better error logging solution.
  }
}

// export async function delete (resource: string): any {
//   try {
//     const response = await API.delete(resource);
//   } catch (err) {
//     console.log(err); // replace with better error logging solution.
//   }
// }
