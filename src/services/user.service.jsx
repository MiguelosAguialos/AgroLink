import axios from "axios";

async function getUserInfo(email) {
  const res = await axios.post("http://localhost:3000/getConsumidorUserInfo", {
    email,
  });
  return res.data;
}

async function updateUser(user) {
  const res = await axios.post("http://localhost:3000/updateConsumidor", {
    user,
  });
  return res.data;
}

export { getUserInfo, updateUser };
