import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="fixed top-0 inset-x-0 bg-white dark:bg-gray-950 shadow z-10">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between h-14">
            <Link
              className="flex items-center justify-center text-xl font-semibold"
              href="/"
            >
              Acme Inc
            </Link>
            <nav className="hidden md:flex gap-4 sm:gap-6">
              <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                href="/features"
              >
                Features
              </Link>
              <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                href="/do-not-try-this-at-home"
              >
                Do not try this at home
              </Link>
              <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                href="#"
              >
                Pricing
              </Link>
              <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                href="#"
              >
                About
              </Link>
              <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                href="#"
              >
                Contact
              </Link>
            </nav>
            <div className="flex items-center gap-4 sm:gap-6">
              <Link
                className="rounded-full border-2 border-gray-900 overflow-hidden dark:border-gray-100"
                href="#"
              >
                <Avatar>
                  <AvatarImage
                    src="https://github.com/guillermo-rebolledo.png"
                    alt="profile picture"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="sr-only">View profile</span>
              </Link>
              <Button variant="outline">Sign In</Button>
            </div>
          </div>
        </div>
      </header>
      <Component {...pageProps} />
      <footer className="fixed bottom-0 flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 with{" "}
          <span role="img" aria-label="love">
            ❤️
          </span>{" "}
          by @memo
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
