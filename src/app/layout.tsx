import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Social Hands",
  description: "Connect with local volunteers and causes across Bangladesh.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||t==="light")document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-[#F7F6F1] text-[#26351F] dark:bg-[#071E07] dark:text-stone-100">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster
          position="top-right"
          containerStyle={{ zIndex: 99999 }}
          toastOptions={{
            style: {
              background: "#26351F",
              color: "#FFFFFF",
            },
            success: {
              style: {
                background: "#15803D",
                color: "#FFFFFF",
              },
              iconTheme: {
                primary: "#FFFFFF",
                secondary: "#166534",
              },
            },
            error: {
              style: {
                background: "#B91C1C",
                color: "#FFFFFF",
              },
              iconTheme: {
                primary: "#FFFFFF",
                secondary: "#991B1B",
              },
            },
          }}
        />
      </body>
    </html>
  );
}
