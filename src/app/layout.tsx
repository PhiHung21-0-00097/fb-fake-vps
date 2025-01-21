import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
    variable: "--font-montserrat", // Biến CSS cho font
    subsets: ["latin"], // Chỉ tải subset latin
    display: "swap", // Tăng hiệu suất hiển thị
});

export const metadata: Metadata = {
    title: "Otis Luxury | [Otis Luxury]",
    description: "otis nguyễn",
    authors: [
        { name: "Otis Nguyễn", url: "https://www.nguyenhoangphihung.id.vn/" },
    ],
    robots: "index, follow",
    openGraph: {
        title: "Otis Luxury | [Otis Luxury]",
        description: "otis nguyễn",
        url: "https://www.nguyenhoangphihung.id.vn/",
        siteName: "Otis Luxury",
        images: [
            {
                url: "https://www.yoursite.com/og-image.jpg",
                width: 800,
                height: 600,
                alt: "Preview image of your website",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        site: "@YourTwitterHandle",
        title: "Otis Luxury | [Otis Luxury]",
        description: "otis nguyễn",
        images: ["https://www.yoursite.com/twitter-image.jpg"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`bg-white`}>{children}</body>
        </html>
    );
}
