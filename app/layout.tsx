import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SwitchToIndia",
  description: "Find Indian alternatives to foreign brands",

  verification: {
    google: "f_hi46dPUxXEc18z7MwHFdK_jvKdGbDKSUs7z-7ycqM",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
