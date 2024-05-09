import Link from "next/link";
import { NextAuthProvider } from "~/components/NextAuthProvider";
import AuthSection from "~/components/authSection";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <NextAuthProvider>
        <AuthSection />
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Nacho&apos;s <span className="text-[hsl(280,100%,70%)]">Auth0</span>{" "}
            App
          </h1>
        </div>
      </NextAuthProvider>
    </main>
  );
}
