import http from "./httpService";
const url = "https://foodielandnod.herokuapp.com/api/register";
export function register(user) {
  return http.post(apiEndPoint, {
    email: user.email,
    password: user.password,
    name: user.name,
  });
}
