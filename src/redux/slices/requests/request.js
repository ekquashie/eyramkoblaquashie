import {BASE_URL} from "../../../constants/endpoints.js";

export const request = (path, method = "GET") => fetch(`${BASE_URL}${path}`, {method, redirect: 'follow'})
  .then(async (response) => {
    return await response.json()
  });