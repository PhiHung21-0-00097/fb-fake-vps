import Link from "next/link";

export const Footer = ({ links }: any) => (
    <div className="max-w-[980px] mx-auto text-xs text-gray-500">
        <ul className="flex flex-wrap gap-5">
            {links.map((link: any, index: any) => (
                <li key={index}>
                    <Link href={link.href}>{link.title}</Link>
                </li>
            ))}
        </ul>
        <div className="mt-5">Meta © 2025</div>
    </div>
);
