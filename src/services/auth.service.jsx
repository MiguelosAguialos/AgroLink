import axios from "axios"

async function createUserConsumidor(user){
    const res = await axios.post("http://localhost:3000/newConsumidor", {user})
    console.log(res.data)
    return res.data
}
async function createUserVoluntario(user){
    const res = await axios.post("http://localhost:3000/newVoluntario", {user})
    return res.data
}
async function login(user){
    const res = await axios.post("http://localhost:3000/login", {user})
    return res.data
}

export {
    createUserConsumidor,
    createUserVoluntario,
    login
}