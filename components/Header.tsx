import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full pt-8 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <Image
          priority
          src="/images/sportas-logo.svg"
          height={60}
          width={60}
          alt="Sophia Portas logo"
        />
        <p className="text-stone-200 text-3xl font-serif font-extralight italic">
          Sophia Portas
        </p>
      </div>
      <nav className="flex justify-end items-center space-x-16">
        <Link href="/">
          <a>
            <p className="text-stone-200 text-sm tracking-wider">PORTFOLIO</p>
          </a>
        </Link>
        <Link href="/about">
          <a>
            <p className="text-stone-200 text-sm tracking-wider">ABOUT</p>
          </a>
        </Link>
        <Link href="/contact">
          <a>
            <p className="text-stone-200 text-sm tracking-wider">
              GET IN TOUCH
            </p>
          </a>
        </Link>
      </nav>
    </div>
  );
}
