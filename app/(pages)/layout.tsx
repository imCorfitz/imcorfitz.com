import { Footer } from "./_components/footer";
import { Header } from "./_components/header";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="border-primary/15 container flex min-h-full max-w-3xl flex-col border-l border-r px-4 py-10 sm:scroll-px-28 md:px-16">
      <Header />
      {children}
      <Footer />
      <div className="flex-1"></div>
    </main>
  );
}
