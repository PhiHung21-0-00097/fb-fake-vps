import Link from "next/link";

export const LanguageSelector = ({ languages }: any) => {
    return (
        <ul className="flex flex-wrap gap-2 text-xs">
            {languages.map((lang: any, index: any) => (
                <li key={index}>
                    <Link href={lang.href}>{lang.title}</Link>
                </li>
            ))}
        </ul>
    );
};
