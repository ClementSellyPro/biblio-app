import Footer from "./_components/Footer";
import Header from "./_components/Header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 overflow-scroll">{children}</main>
      <Footer />
    </div>
  );
}
