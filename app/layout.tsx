"use client";

import { ClerkProvider } from "@clerk/nextjs";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Box } from "@mui/material";
import { usePathname } from "next/navigation";

function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith("/adminpage");

  return (
    <>
      {!isAdminPage && <Header />}
      <Box component="main">{children}</Box>
      {!isAdminPage && <Footer />}
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body >
          <Layout>{children}</Layout>
        </body>
      </html>
    </ClerkProvider>
  );
}