import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin-ext"],
});

export const metadata = {
  title: "Impulsa tu negocio a Tres Pagos",
  description: "Compra por adelantado para impulsar tu negocio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}