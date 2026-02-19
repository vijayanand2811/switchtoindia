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
      <head>
        <meta name="google-site-verification" content="O2s_i8GoICySHNB-X9J7eZjkDjTYYTP3LnuqNpuRQk0" />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
