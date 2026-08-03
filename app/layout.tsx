import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Build Lasting Relationships",
  description:
    "Boomerang — Conversational AI platform for modern financial institutions. Agents that handle the full borrower lifecycle across email, SMS, and voice.",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link
          rel="stylesheet"
          href="https://db.onlinewebfonts.com/c/9d4d074c9335825a23cce178ee03b498?family=P22+Mackinac+W01+Book"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
};

export default RootLayout;
