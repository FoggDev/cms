"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { X, Menu } from "lucide-react";

export function Header({ siteConfig }: { siteConfig: any }) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2 cursor-pointer">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-lg font-bold text-primary-foreground">
                {siteConfig.siteName.charAt(0)}
              </span>
            </div>
            <span className="text-xl font-bold text-foreground">
              {siteConfig.siteName}
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {siteConfig.navigations.map((item: any) => (
            <Link
              key={item.documentId}
              href={item.url}
              className={`text-sm font-medium transition-colors cursor-pointer ${
                pathname === item.url
                  ? "text-primary font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Get Started
          </Button>
        </div>

        <div className="md:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="cursor-pointer"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
          <div className="container mx-auto px-6 py-4 space-y-4">
            <nav className="flex flex-col space-y-3">
              {siteConfig.navigations.map((item: any) => (
                <Link
                  key={item.id}
                  href={item.url}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-medium transition-colors cursor-pointer ${
                    pathname === item.url
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex flex-col space-y-2 pt-4 border-t border-border">
              <Button variant="ghost" size="sm" className="justify-start">
                Sign In
              </Button>
              <Button
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
