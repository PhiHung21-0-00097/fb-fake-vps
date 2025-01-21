import { Fragment, ReactNode } from "react";

type DefaultLayoutProps = {
    children: ReactNode;
};
export const DefaultLayout = async ({ children }: DefaultLayoutProps) => {
    return (
        <Fragment>
            {/* <Header /> */}
            <main>{children}</main>
        </Fragment>
    );
};
