import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="text-left w-full">
        <footer className="footer p-10 bg-base-200 text-base-content">
          <aside>
            <Image
              src="/Logo2.png"
              width={75}
              height={75}
              className="rounded-full text-center align-middle justify-center"
            />
            <p>
              Ittsy Systems.
              <br />
              Copyright 2024.
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Services</h6>
            <Link className="link link-hover" href="/services/#ai">
              AI & Gen AI
            </Link>
            <Link className="link link-hover" href="/services/#architecture">
              Solution Architecture
            </Link>
            <Link className="link link-hover" href="/services/#saas">
              SaaS
            </Link>
            <Link className="link link-hover" href="/services/#data">
              Data/API Integration
            </Link>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <Link className="link link-hover" href="/about">
            About
            </Link><Link className="link link-hover" href="/contact">
              Contact
            </Link>
            <Link className="link link-hover" href="/careers">
              Careers
            </Link>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <Link className="link link-hover" href="/privacy">
              Privacy policy
            </Link>
            <Link className="link link-hover" href="/cookies">
              Cookie policy
            </Link>
          </nav>
          <nav className="flex align-middle md:pt-8">
            <Link
              className="link link-hover"
              href="https://x.com/IttsyCo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/twitter.png" alt="twitter" width={90} height={90} />
            </Link>
            <Link
              className="link link-hover"
              href="https://www.facebook.com/profile.php?id=61560461487150"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/facebook.png" alt="facebook" width={75} height={75} />
            </Link>
            <Link
              className="link link-hover ml-8 mt-2"
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/linkedin.png" alt="linked" width={65} height={65} />
            </Link>
          </nav>
        </footer>
      </div>
    </>
  );
}
