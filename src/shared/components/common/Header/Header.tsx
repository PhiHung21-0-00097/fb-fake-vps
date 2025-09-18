import Link from "next/link";

const listHeader = [
    { title: "Products", href: "/services" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
];

export const Header = () => {
    return (
        <header className="Header bg-white sticky top-0 py-8 z-30">
            <nav className="w-full flex justify-between items-center container">
                <Link href="/" className="link-logo group relative">
                    <h1 className="relative font-bold text-[20px] md:text-[30px] aFooter max">
                        Store
                    </h1>
                </Link>
                <ul className="flex">
                    {listHeader.map(({ title, href }) => (
                        <li key={href} className="mx-[30px]">
                            <Link
                                href={href}
                                className="text-black text-[17px] uppercase py-[7px] px-[12px] rounded-[3px] 
                  				hover:bg-purple hover:text-white transition-all ease-in-out duration-500 
                  				active:bg-purple active:text-white cursor-pointer"
                            >
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};
