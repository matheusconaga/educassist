import Header from "../../widget/Header";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />

      <main className=" overflow-hidden">{children}</main>
    </>
  );
}
