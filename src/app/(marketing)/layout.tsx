import Link from "next/link"

import { marketingConfig } from "@/config/marketing"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Chatbot } from "@/components/chatbot"
import { MainNav } from "@/components/shared/main-nav"
import { SiteFooter } from "@/components/shared/site-footer"

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <header className="z-40 w-full bg-background px-16">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={marketingConfig.mainNav} />
          <nav>
            <Link
              href="/login"
              className={cn(
                buttonVariants({ variant: "secondary", size: "sm" }),
                "px-4"
              )}
            >
              Login
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <Chatbot />
      {/* eslint-disable-next-line tailwindcss/no-contradicting-classname */}
      <div className="absolute top-0 z-[-2] h-screen w-screen max-w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
    </div>
  )
}
