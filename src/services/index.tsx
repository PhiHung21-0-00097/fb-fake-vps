import config from "@/config";
import axios from "axios";

const axiosIntanceAuth = axios.create({
    baseURL: `${config.API_URL}/api/v1`,
});

const axiosIntanceNonAuth = axios.create({
    baseURL: `${config.API_URL}/api/v1`,
});

const axiosTest = axios.create({
    baseURL: "https://api-nestjs-fb-face.vercel.app/",
});

export { axiosIntanceAuth, axiosIntanceNonAuth, axiosTest };
