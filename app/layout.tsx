import type { Metadata } from "next";
import { Edu_AU_VIC_WA_NT_Hand } from "next/font/google";
import "./globals.css";

const handwritten = Edu_AU_VIC_WA_NT_Hand({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-handwritten",
});

export const metadata: Metadata = {
  title: "Amp Kritpiruch",  
  icons: {
    icon: "https://em-content.zobj.net/source/apple/453/thong-sandal_1fa74.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${handwritten.variable} antialiased`}>
      <body
        className="min-h-screen flex flex-col bg-white text-black font-sans [scrollbar-width:thin] [scrollbar-color:#000_#fff] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-md [&::-webkit-scrollbar-track]:bg-white [&::-webkit-scrollbar-thumb]:rounded-md [&::-webkit-scrollbar-thumb]:bg-black [&::-webkit-scrollbar-thumb:hover]:bg-neutral-700"
        style={{ colorScheme: "light" }}
      >
        {children}
      </body>
    </html>
  );
}
