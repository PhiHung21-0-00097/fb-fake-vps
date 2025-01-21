import { Metadata } from "next";
import { Banner } from "../shared/components/common/Banner";

export const metadata: Metadata = {
    title: "Otis Luxury",
};
export default function HomePage() {
    return (
        <>
            <Banner />
            {/*   <Window />
            <Automative /> */}
            {/* <Introduce /> */}
        </>
    );
}
