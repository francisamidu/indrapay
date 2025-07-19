import Link from "next/link"
import { LogoIcon } from "@/components/icons"

interface FooterLinksProps {
  title: string
  links: Array<{ href: string; label: string }>
}

function FooterLinks({ title, links }: FooterLinksProps) {
  return (
    <div>
      <h4 className="font-semibold text-white tracking-wider">{title}</h4>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <footer id="about" className="bg-slate-800/50 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <LogoIcon className="text-teal-500" />
              <span className="text-xl font-bold text-white">Indrapay</span>
            </Link>
            <p className="mt-4 text-gray-400">Connecting your business to the global economy.</p>
          </div>
          <FooterLinks
            title="Product"
            links={[
              { href: "#", label: "Payments" },
              { href: "#", label: "Global Payouts" },
              { href: "#pricing", label: "Pricing" },
              { href: "#", label: "Security" },
            ]}
          />
          <FooterLinks
            title="Company"
            links={[
              { href: "#about", label: "About Us" },
              { href: "#", label: "Careers" },
              { href: "#", label: "Contact" },
              { href: "#", label: "Blog" },
            ]}
          />
          <FooterLinks
            title="Developers"
            links={[
              { href: "/docs", label: "API Documentation" },
              { href: "#", label: "API Status" },
              { href: "#", label: "Sandbox" },
            ]}
          />
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} Indrapay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
