/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosTest } from ".";

const loginCreateUser = (data: any) => {
  return axiosTest.post("/users/login", { ...data });
};
export { loginCreateUser };
