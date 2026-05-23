import { socialImgs } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center items-center md:items-start group transition-colors duration-300 max-w-fit mx-auto md:mx-0">
          <Link
            href="/blog"
            className="text-white/90 group-hover:text-white relative"
          >
            Visit my Blog
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
          </Link>
        </div>
        <div className="socials">
          {socialImgs.map((img) => (
            <a
              key={img.name}
              href={img.url}
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <Image src={img.imgPath} alt={img.name} width={24} height={24} />
            </a>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Rahim | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
