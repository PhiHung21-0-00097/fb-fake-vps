import { Banner } from "@/shared/components/common/Banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Facebook",
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
