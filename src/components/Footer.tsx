import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaThreads, FaXTwitter } from "react-icons/fa6";

// Array for Categories navigation links
const categoryLinks = [
  { name: "Men", href: "/men" },
  { name: "Women", href: "/women" },
  { name: "Hats", href: "/hats" },
  { name: "Jackets", href: "/jackets" },
  { name: "Sneakers", href: "/sneakers" },
];

// Array for social media links with icon components and URLs
const socialLinks = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://linkedin.com/",
  },
  {
    name: "Twitter(X)",
    icon: FaXTwitter,
    href: "https://x.com",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    href: "https://facebook.com",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://instagram.com",
  },
  {
    name: "Threads",
    icon: FaThreads,
    href: "https://threads.net/?hl=en",
  },
];

const Footer = () => {
  return (
    <footer className="bg-black text-center font-montserratAlt text-white/75">
      <div className="mx-auto max-w-4xl px-4 py-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
        <h1 className="mb-6 text-2xl font-semibold uppercase tracking-tight md:text-3xl">
          Couturio
        </h1>
        <p className="mb-6">
          © 2024{" "}
          <span className="ont-semibold uppercase text-primary">Couturio</span>.
          Your go-to destination for the latest in fashion trends and timeless
          classics. Shop with confidence and enjoy fast shipping, hassle-free
          returns, and exceptional customer service. Thank you for choosing us!
        </p>

        <div className="mb-6 flex flex-wrap justify-center gap-4 text-xl font-semibold">
          {categoryLinks.map((link, idx) => (
            <a
              key={String(idx)}
              href={link.href}
              className="inline-block w-max"
            >
              <p className="duration-200 hover:tracking-tight hover:text-primary">
                {link.name}
              </p>
            </a>
          ))}
        </div>

        <div className="mb-6 flex flex-wrap justify-center gap-4 font-semibold">
          {socialLinks.map((social, idx) => (
            <a
              key={String(idx)}
              href={social.href}
              aria-label={social.name}
              target="_blank"
              className="inline-block w-max"
            >
              <social.icon className="text-xl duration-200 hover:text-primary" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
