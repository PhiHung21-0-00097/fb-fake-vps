import { axiosTest } from ".";

const loginCreateUser = (data: any) => {
    return axiosTest.post("/user/login", { ...data });
};
export { loginCreateUser };
