import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("http://localhost:3000"),

	title: "Ofren dialsa's Portfolio",
	authors: {
		name: "Ofren dialsa",
	},

	description:
		"Sekarang saya berkuliah di Prodi Sistem informasi, Universitas jambi, dan saya telah mengembangkan beberapa project di bidang web development",
	openGraph: {
		title: "Portfolio",
		description:
			"Sekarang saya berkuliah di Prodi Sistem informasi, Universitas jambi, dan saya telah mengembangkan beberapa project di bidang web development",
		url: "http://localhost:3000",
		siteName: "Portfolio",
		images: "/og.png",
		type: "website",
	},
	keywords: ["daily web coding", "Ofren dialsa", "dailywebcoding"],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider></body>
    </html>
  );
}
