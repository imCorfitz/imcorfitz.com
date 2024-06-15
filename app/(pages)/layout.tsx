import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
import { LayoutTransition } from "./_components/layout-transition";

interface LayoutProps {
  children: React.ReactNode;
}

export function MyTransition(props: { children: React.ReactNode }) {
  return (
    <LayoutTransition
      initial={{ opacity: 0, y: -15 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.1, duration: 0.1 },
      }}
      exit={{ opacity: 0, y: 15 }}
    >
      {props.children}
    </LayoutTransition>
  );
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="container flex min-h-full max-w-3xl flex-col border-zinc-700 px-4 py-10 sm:scroll-px-28 md:border-l md:border-r md:px-16">
      <Header />
      <MyTransition>
        {children}
        <Footer />
        <div className="flex-1"></div>
      </MyTransition>
    </main>
  );
}
