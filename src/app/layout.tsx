import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import {ClerkProvider} from "@clerk/nextjs"
import "./globals.css";
import ModalProvider from "@/providers/modal-provider";
import { BillingProvider } from "@/providers/billing-provider";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SwiftAuto",
  description: "Automate Your Work With SwiftAuto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <BillingProvider>
              <ModalProvider>
              {children}
              </ModalProvider>
            </BillingProvider>
          </ThemeProvider></body>
    </html>
    </ClerkProvider>
  );
}
