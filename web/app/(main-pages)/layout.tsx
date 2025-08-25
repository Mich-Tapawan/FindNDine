import MainNavbar from "@/components/pages/MainNavbar";

export default function MainPagesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <MainNavbar />
      {children}
    </>
  );
}
