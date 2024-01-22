import type { Metadata } from "next";
import { PT_Sans_Narrow } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import RegisterModal from "./components/modal/RegisterModal";
// import ToasterProvider from "./provider/ToastProvider";
import { Toaster } from "react-hot-toast";
import LoginModal from "./components/modal/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./components/modal/RentModal";
import ClientOnly from "./components/ClientOnly";
import SearchModal from "./components/modal/SearchModal";

const fontFamily = PT_Sans_Narrow({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Airbnb Clone",
  description: "Airbnb Clone",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={fontFamily.className}>
        <ClientOnly>
          <Toaster />
          <LoginModal />
          <RegisterModal />
          <RentModal />
          <SearchModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
