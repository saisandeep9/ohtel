import http from "./httpService";

function productUrl() {
  return process.env.REACT_APP_API_URL + "/products";
}

function categoriesUrl() {
  return process.env.REACT_APP_API_URL + "/categories";
}

export function getproducts() {
  return http.get(productUrl());
}
export function getcategories() {
  return http.get(categoriesUrl());
}
