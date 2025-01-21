import { fb, int, it, tw } from "@public/images";
import Image from "next/image";
import Link from "next/link";

const contactInfo = [
    {
        href: "/",
        text: "CÔNG TY TNHH JOLLIBEE VIỆT NAM",
    },
    {
        href: "https://www.google.com/maps/dir/10.8335852,106.6713565/.../entry=ttu",
        text: "Địa chỉ: Tầng 26, Tòa nhà CII Tower, số 152 Điện Biên Phủ, Phường 25, Quận Bình Thạnh, Thành phố Hồ Chí Minh, Việt Nam",
    },
    {
        href: "https://www.google.com/intl/vi/gmail/about/",
        text: "Email: vananhtechnology@gmail.com",
    },
    { href: "tel: 0903 079 135", text: "Điện Thoại: 0903 079 135" },
    { href: "/", text: "Hộp thư góp ý: jbvnfeedback@jollibee.com.vn" },
];

const contacList = [
    { href: "google.com", text: "Liên hệ" },
    { href: "google.com", text: "Điều khoản thỏa thuận" },
    { href: "google.com", text: "Chính sách bảo mật" },
    { href: "google.com", text: "Góp ý báo lỗi" },
];

const socialIcons = [fb, tw, int, it];

export const Footer = () => (
    <footer className="Footer my-20 ">
        <div className="container mt-5">
            <div className="row flex justify-between gap-5">
                {/* Logo */}
                <div className="w-[25%] text-center flex justify-center">
                    <div className="w-20">
                        <Link href="/" className="w-5 group ">
                            <h1 className="relative font-bold text-[20px] md:text-[30px] aFooter">
                                Store
                            </h1>
                        </Link>
                    </div>
                </div>

                {/* Thông tin liên hệ */}
                <div className="w-[25%]">
                    <ul className="list-unstyled mb-0">
                        {contactInfo.map(({ href, text }, index) => (
                            <li key={index}>
                                <a
                                    href={href}
                                    className="text-gray-600 text-[14px] leading-[30px]"
                                >
                                    {text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Chính sách */}
                <div className="w-[25%]">
                    <ul className="list-unstyled mb-0">
                        {contacList.map(({ href, text }, index) => (
                            <li key={index}>
                                <a
                                    href={href}
                                    className="text-gray-600 text-[14px] leading-[30px]"
                                >
                                    {text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mạng xã hội */}
                <div className="w-[25%]">
                    <h5 className="text-uppercase fw-bold text-[16px]">
                        KẾT NỐI CHÚNG TÔI
                    </h5>
                    <div className="my-4 flex gap-2">
                        {socialIcons.map((icon, index) => (
                            <Image
                                key={index}
                                loading="lazy"
                                src={icon}
                                className="icons m-1"
                                role="button"
                                alt=""
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </footer>
);
