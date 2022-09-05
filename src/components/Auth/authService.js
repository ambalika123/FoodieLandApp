import http from "./httpService";

const url = "https://foodielandnod.herokuapp.com/api/signIn";
//const tokenKey = "token";

http.setJwt(getJwt());
export async function login(email, password) {
  const { data: jwt } = await http.post(url, { email, password });
  console.log(jwt);
  localStorage.setItem("token", JSON.stringify(jwt.accessToken));
}

export function logout() {
  localStorage.removeItem("token");
}

export function getJwt() {
  return localStorage.getItem("token");
}
export default {
  login,
  logout,
  getJwt,
};
