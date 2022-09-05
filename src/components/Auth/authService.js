import http from "./httpService";

const url = "https://foodielandnod.herokuapp.com/api/signIn";
const tokenKey = "token";

http.setJwt(getJwt());
export async function login(email, password) {
  const { data: jwt } = await http.post(url, { email, password });
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}
export default {
  login,
  logout,
  getJwt,
};
