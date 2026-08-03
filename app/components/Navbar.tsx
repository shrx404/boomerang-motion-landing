const BoomerangLogo = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 256 256"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M 144 256 L 27.598 256 L 144 139.598 Z" />
    <path d="M 256 207.5 L 200 256 L 200 56 L 0 56 L 48 0 L 256 0 Z" />
    <path d="M 0 204.402 L 0 112 L 92.402 112 Z" />
  </svg>
);

const navLinks = [
  { label: "Product", href: "#product" },
  { label: "Solutions", href: "#solutions" },
  { label: "Pricing", href: "#pricing" },
  { label: "Company", href: "#company" },
] as const;

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 m-4 mt-2 px-2 sm:px-6 md:px-10 py-0 sm:py-4 backdrop-blur-2xl rounded-lg">
      {/* <nav className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-10 md:px-14 py-4 sm:py-5 backdrop-blur-2xl rounded-xl sm:rounded-2xl md:rounded-3xl"> */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5">
          <BoomerangLogo className="w-6 h-6 text-[#191919]" />
          <span className="font-semibold text-base tracking-tight text-[#191919]">
            Boomerang
          </span>
        </a>

        {/* Center links — hidden below md */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#191919]/70 hover:text-[#191919] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#demo"
          className="px-5 py-2.5 bg-[#191919] text-white text-sm font-medium rounded-lg hover:bg-[#191919]/90 transition-colors duration-200"
        >
          Book A Demo
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
