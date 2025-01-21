import { DefaultLayout } from "@/layout/DefaultLayout";

export default function MainLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return <DefaultLayout>{children}</DefaultLayout>;
}
