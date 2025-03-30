
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>{children}</main>
      </div>
    </ThemeProvider>
  );
}
