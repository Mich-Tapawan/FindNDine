import Navbar from "@/components/pages/landing-page/Navbar";

export default function LandingPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
