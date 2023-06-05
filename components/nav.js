import Link from "next/link";

const links = [
  {
    href: "https://github.com/hshiferaw/nextjs-google-sheets-cms.git",
    label: "GitHub",
  },
  {
    href: "https://www.hshiferaw.me/blog",
    label: "Docs",
  },
];

export default function Nav() {
  return (
    <nav className="container mx-auto">
      <ul className="flex justify-between items-center p-8">
        <li>
          <Link href="https://www.hshiferaw.me">
            <a className="text-blue-500 no-underline">Home</a>
          </Link>
        </li>
        <ul className="flex justify-between items-center space-x-4">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a href={href} className="btn-blue no-underline">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
}
