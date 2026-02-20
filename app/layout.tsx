import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "SwitchToIndia",
  description: "Find Indian alternatives to foreign brands",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Header />
        <main className="px-4 md:px-10">{children}</main>
      </body>
    </html>
  );
}