"use client";
import Image from "next/image";
import { faceImage } from "../../../../../../public";
import { LoginForm } from "../LoginForm";
export const Banner = () => {
    return (
        <section className=" text-black h-screen">
            <div className="pt-[114px] pb-[112px] bg-[#f2f4f7]">
                <div className=" flex justify-center">
                    <div className="w-[980px] my-0 mx-auto py-[20px] px-0 relative">
                        <div className="row flex">
                            <div className="w-[580px] pr-[32px]">
                                <Image
                                    loading="lazy"
                                    src={faceImage}
                                    alt=""
                                    className="w-[320px] ml-[-28px]"
                                />
                                <h1 className="text-[27px] w-[500px]">
                                    Facebook helps you connect and share with
                                    the people in your life.
                                </h1>
                            </div>

                            <div className="text-center w-[396px] h-[456px]">
                                <div className="text-center bg-[#fff] rounded-[8px] shadow-xl pb-[24px] pt-[10px]">
                                    <LoginForm />
                                </div>
                                <div className="mt-[28px]">
                                    <span className="text-[14px]">
                                        <b className="">Create a Page </b>
                                        for a celebrity, brand or business.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white text-[#737373]">
                <div className="mt-[20px]">
                    <div className="w-[980px] my-0 mx-auto">
                        <ul
                            className="pt-[8px] items-center flex flex-wrap m-0 p-0 text-[12px]"
                            data-nocookies="1"
                        >
                            <li className="">English (UK)</li>
                            <li className="pl-[10px]">
                                <a
                                    className="_sv4"
                                    dir="ltr"
                                    href="https://www.facebook.com/"
                                    title="Vietnamese"
                                    id="u_0_6_cc"
                                >
                                    Tiếng Việt
                                </a>
                            </li>
                            <li className="pl-[10px]">
                                <a
                                    className="_sv4"
                                    dir="ltr"
                                    href="https://vi-vn.facebook.com/"
                                    title="Traditional Chinese (Taiwan)"
                                    id="u_0_7_zX"
                                >
                                    中文(台灣)
                                </a>
                            </li>
                            <li className="pl-[10px]">
                                <a
                                    className="_sv4"
                                    dir="ltr"
                                    href="https://zh-tw.facebook.com/"
                                    title="Korean"
                                    id="u_0_8_FF"
                                >
                                    한국어
                                </a>
                            </li>
                            <li className="pl-[10px]">
                                <a
                                    className="_sv4"
                                    dir="ltr"
                                    href="https://ko-kr.facebook.com/"
                                    title="Japanese"
                                    id="u_0_9_Kq"
                                >
                                    日本語
                                </a>
                            </li>
                            <li className="pl-[10px]">
                                <a
                                    className="_sv4"
                                    dir="ltr"
                                    href="https://ja-jp.facebook.com/"
                                    title="French (France)"
                                    id="u_0_a_to"
                                >
                                    Français (France)
                                </a>
                            </li>
                            <li className="pl-[10px]">
                                <a
                                    className="_sv4"
                                    dir="ltr"
                                    href="https://fr-fr.facebook.com/"
                                    title="Thai"
                                    id="u_0_b_vd"
                                >
                                    ภาษาไทย
                                </a>
                            </li>
                            <li className="pl-[10px]">
                                <a
                                    className="_sv4"
                                    dir="ltr"
                                    href="https://th-th.facebook.com/"
                                    title="Spanish"
                                    id="u_0_c_uA"
                                >
                                    Español
                                </a>
                            </li>
                            <li className="pl-[10px]">
                                <a
                                    className="_sv4"
                                    dir="ltr"
                                    href="https://es-la.facebook.com/"
                                    title="Portuguese (Brazil)"
                                    id="u_0_d_B3"
                                >
                                    Português (Brasil)
                                </a>
                            </li>
                            <li className="pl-[10px]">
                                <a
                                    className="_sv4"
                                    dir="ltr"
                                    href="https://pt-br.facebook.com/"
                                    title="German"
                                    id="u_0_e_Dt"
                                >
                                    Deutsch
                                </a>
                            </li>
                            <li className="pl-[10px]">
                                <a
                                    className="_sv4"
                                    dir="ltr"
                                    href="https://de-de.facebook.com/"
                                    title="Italian"
                                    id="u_0_f_Ta"
                                >
                                    Italiano
                                </a>
                            </li>
                            <li className="pl-[10px]">
                                <a
                                    role="button"
                                    className="_42ft _4jy0 _517i _517h _51sy"
                                    rel="dialog"
                                    href="#"
                                    title="Show more languages"
                                >
                                    <i className="img sp_YbiIuPczOY_ sx_089752"></i>
                                </a>
                            </li>
                        </ul>
                        <div className="border-b-[1px] border-[#dddfe2] text-[1px] h-[8px] mb-[8px]  "></div>
                        <div>
                            <ul className="text-[12px] ml-[-20px] flex flex-wrap text-[#737373]">
                                <li className="pl-[20px]">
                                    <a
                                        href="/reg/"
                                        title="Sign up for Facebook"
                                    >
                                        Sign Up
                                    </a>
                                </li>
                                <li className="pl-[20px]">
                                    <a
                                        href="/login/"
                                        title="Log in to Facebook"
                                    >
                                        Log in
                                    </a>
                                </li>
                                <li className="pl-[20px]">
                                    <a
                                        href="https://messenger.com/"
                                        title="Take a look at Messenger."
                                    >
                                        Messenger
                                    </a>
                                </li>
                                <li className="pl-[20px]">
                                    <a
                                        href="/lite/"
                                        title="Facebook Lite for Android."
                                    >
                                        Facebook Lite
                                    </a>
                                </li>
                                <li className="pl-[20px]">
                                    <a
                                        href="https://www.facebook.com/watch/"
                                        title="Browse in Video"
                                    >
                                        Video
                                    </a>
                                </li>
                                <li className="pl-[20px]">
                                    <a
                                        href="/places/"
                                        title="Take a look at popular places on Facebook."
                                    >
                                        Places
                                    </a>
                                </li>
                                <li className="pl-[20px]">
                                    <a
                                        href="/games/"
                                        title="Check out Facebook games."
                                    >
                                        Games
                                    </a>
                                </li>
                                <li className="pl-[20px]">
                                    <a
                                        href="/marketplace/"
                                        title="Buy and sell on Facebook Marketplace."
                                    >
                                        Marketplace
                                    </a>
                                </li>
                                <li className="pl-[20px]">
                                    <a
                                        href="https://about.meta.com/technologies/meta-pay"
                                        title="Learn more about Meta Pay"
                                        target="_blank"
                                    >
                                        Meta Pay
                                    </a>
                                </li>
                                <li className="pl-[20px]">
                                    <a
                                        href="https://www.meta.com/"
                                        title="Discover Meta"
                                        target="_blank"
                                    >
                                        Meta Store
                                    </a>
                                </li>
                                <li className="pl-[20px]">
                                    <a
                                        href="https://www.meta.com/quest/"
                                        title="Learn more about Meta Quest"
                                        target="_blank"
                                    >
                                        Meta Quest
                                    </a>
                                </li>
                                <li className="pl-[20px]">
                                    <a
                                        href="https://www.meta.com/smart-glasses/"
                                        title="Learn more about Ray-Ban Meta"
                                        target="_blank"
                                    >
                                        Ray-Ban Meta
                                    </a>
                                </li>
                                <li className="pl-[20px]">
                                    <a
                                        href="https://www.meta.ai/"
                                        title="Meta AI"
                                    >
                                        Meta AI
                                    </a>
                                </li>
                                <li className="pl-[20px]">
                                    <a
                                        href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2F&amp;h=AT1Oj82ZVaIjJ-KvdopX-ECEdYaBQpTtIT0YhFGdbyUVP6WA9Y1QdsFjM_gt6PoEnaE5RyKa9Q-cWX6l1eKA5ymgy44UZzdZJNoWJUiKDG-BvzJpmovXjXu_-f9dQDf6t0S5JFNnDNAF-qjXBg_1L_ZYRJfjL0klw0ivmQ"
                                        title="Take a look at Instagram"
                                        target="_blank"
                                        rel="noreferrer nofollow"
                                        data-lynx-mode="asynclazy"
                                    >
                                        Instagram
                                    </a>
                                </li>
                                <li className="pl-[20px]">
                                    <a
                                        href="https://www.threads.net/"
                                        title="Check out Threads"
                                    >
                                        Threads
                                    </a>
                                </li>
                                <li className="pl-[20px]">
                                    <a
                                        href="/fundraisers/"
                                        title="Donate to worthy causes."
                                    >
                                        Fundraisers
                                    </a>
                                </li>
                                <li className="pl-[20px]">
                                    <a
                                        href="/biz/directory/"
                                        title="Browse our Facebook Services directory."
                                    >
                                        Services
                                    </a>
                                </li>
                                <li className="pl-[20px]">
                                    <a
                                        href="/votinginformationcenter/?entry_point=c2l0ZQ%3D%3D"
                                        title="See the Voting Information Centre"
                                    >
                                        Voting Information Centre
                                    </a>
                                </li>
                                <li className="pl-[20px]">
                                    <a
                                        href="/privacy/policy/?entry_point=facebook_page_footer"
                                        title="Learn how we collect, use and share information to support Facebook."
                                    >
                                        Privacy Policy
                                    </a>
                                </li>
                                <li className="pl-[20px]">
                                    <a
                                        href="/privacy/center/?entry_point=facebook_page_footer"
                                        title="Learn how to manage and control your privacy on Facebook."
                                    >
                                        Privacy Centre
                                    </a>
                                </li>
                                <li className="pl-[20px]">
                                    <a
                                        href="/groups/discover/"
                                        title="Explore our groups."
                                    >
                                        Groups
                                    </a>
                                </li>
                                <li className="pl-[20px]">
                                    <a
                                        href="https://about.meta.com/"
                                        title="Read our blog, discover the resource centre and find job opportunities."
                                    >
                                        About
                                    </a>
                                </li>
                                <li className="pl-[20px]">
                                    <a
                                        href="/ad_campaign/landing.php?placement=pflo&amp;campaign_id=402047449186&amp;nav_source=unknown&amp;extra_1=auto"
                                        title="Advertise on Facebook"
                                    >
                                        Create ad
                                    </a>
                                </li>
                                <li className="pl-[20px]">
                                    <a
                                        href="/pages/create/?ref_type=site_footer"
                                        title="Create a Page"
                                    >
                                        Create Page
                                    </a>
                                </li>
                                <li className="pl-[20px]">
                                    <a
                                        href="https://developers.facebook.com/?ref=pf"
                                        title="Develop on our platform."
                                    >
                                        Developers
                                    </a>
                                </li>
                                <li className="pl-[20px]">
                                    <a
                                        href="/careers/?ref=pf"
                                        title="Make your next career move to our brilliant company."
                                    >
                                        Careers
                                    </a>
                                </li>
                                <li className="pl-[20px]">
                                    <a
                                        href="/policies/cookies/"
                                        title="Learn about cookies and Facebook."
                                        data-nocookies="1"
                                    >
                                        Cookies
                                    </a>
                                </li>
                                <li className="pl-[20px]">
                                    <a
                                        className="_41ug"
                                        data-nocookies="1"
                                        href="https://www.facebook.com/help/568137493302217"
                                        title="Learn about Ad Choices."
                                    >
                                        AdChoices
                                        <i className="img sp_YbiIuPczOY_ sx_b2cf63"></i>
                                    </a>
                                </li>
                                <li className="pl-[20px]">
                                    <a
                                        data-nocookies="1"
                                        href="/policies?ref=pf"
                                        title="Review our terms and policies."
                                    >
                                        Terms
                                    </a>
                                </li>
                                <li className="pl-[20px]">
                                    <a
                                        href="/help/?ref=pf"
                                        title="Visit our Help Centre."
                                    >
                                        Help
                                    </a>
                                </li>
                                <li className="pl-[20px]">
                                    <a
                                        href="https://www.facebook.com/help/637205020878504"
                                        title="Visit our contact uploading and non-users notice."
                                    >
                                        Contact uploading and non-users
                                    </a>
                                </li>
                                <li className="pl-[20px]">
                                    <a
                                        className="accessible_elem"
                                        href="/settings"
                                        title="View and edit your Facebook settings."
                                    >
                                        Settings
                                    </a>
                                </li>
                                <li className="pl-[20px]">
                                    <a
                                        className="accessible_elem"
                                        href="/allactivity?privacy_source=activity_log_top_menu"
                                        title="View your activity log"
                                    >
                                        Activity log
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="my-[20px] text-[11px]">
                            <div>
                                <span> Meta © 2025</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
