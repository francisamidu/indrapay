import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "@/components/icons";
import type { JSX } from "react";
import Link from "next/link";

interface APIEndpoint {
  method: string;
  endpoint: string;
  description: string;
}

interface SDKLanguage {
  name: string;
  logo: string;
  installCommand: string;
}

export default function DevelopersPage(): JSX.Element {
  const apiEndpoints: APIEndpoint[] = [
    {
      method: "POST",
      endpoint: "/charges",
      description: "Create a new charge",
    },
    {
      method: "GET",
      endpoint: "/charges/:id",
      description: "Retrieve a charge",
    },
    { method: "POST", endpoint: "/refunds", description: "Create a refund" },
    { method: "GET", endpoint: "/customers", description: "List customers" },
    {
      method: "POST",
      endpoint: "/webhooks",
      description: "Create webhook endpoint",
    },
  ];

  const sdks: SDKLanguage[] = [
    {
      name: "Node.js",
      logo: "/placeholder.svg?height=40&width=40&text=Node",
      installCommand: "npm install indrapay-node",
    },
    {
      name: "Python",
      logo: "/placeholder.svg?height=40&width=40&text=Py",
      installCommand: "pip install indrapay",
    },
    {
      name: "PHP",
      logo: "/placeholder.svg?height=40&width=40&text=PHP",
      installCommand: "composer require indrapay/indrapay-php",
    },
    {
      name: "Ruby",
      logo: "/placeholder.svg?height=40&width=40&text=Ruby",
      installCommand: "gem install indrapay",
    },
  ];

  return (
    <div className="bg-slate-900 text-gray-300 antialiased">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              Built for
              <span className="bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">
                {" "}
                Developers
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-400">
              Powerful APIs, comprehensive documentation, and developer tools
              that make integration simple and fast.
            </p>
            <div className="mt-10 flex justify-center items-center space-x-4">
              <Button variant="default" asChild>
                <Link href="/docs">View Documentation</Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link href="/sandbox">Try Sandbox</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* API Overview */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  RESTful API
                </h2>
                <p className="text-lg text-gray-400 mb-8">
                  Our API is designed with simplicity and predictability in
                  mind. Every endpoint follows REST conventions, returns JSON,
                  and uses standard HTTP response codes.
                </p>
                <div className="space-y-4">
                  {apiEndpoints.map((endpoint, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 bg-slate-900 p-4 rounded-lg"
                    >
                      <span
                        className={`px-3 py-1 rounded text-sm font-semibold ${
                          endpoint.method === "POST"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-blue-500/20 text-blue-400"
                        }`}
                      >
                        {endpoint.method}
                      </span>
                      <code className="text-teal-400 font-mono">
                        {endpoint.endpoint}
                      </code>
                      <span className="text-gray-400 text-sm">
                        {endpoint.description}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-slate-800 rounded-xl p-6 shadow-2xl">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <pre className="text-sm overflow-x-auto">
                  <code>
                    <span className="text-blue-400">curl</span>{" "}
                    <span className="text-green-400">
                      https://api.indrapay.com/v1/charges
                    </span>{" "}
                    \{"\n"}
                    {"  "}
                    <span className="text-purple-400">-u</span>{" "}
                    <span className="text-green-400">sk_test_...</span>: \{"\n"}
                    {"  "}
                    <span className="text-purple-400">-d</span>{" "}
                    <span className="text-green-400">amount=2000</span> \{"\n"}
                    {"  "}
                    <span className="text-purple-400">-d</span>{" "}
                    <span className="text-green-400">currency=usd</span> \{"\n"}
                    {"  "}
                    <span className="text-purple-400">-d</span>{" "}
                    <span className="text-green-400">source=tok_visa</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* SDKs Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Official SDKs
              </h2>
              <p className="mt-4 text-lg text-gray-400">
                Get started quickly with our official libraries for popular
                programming languages.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sdks.map((sdk, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 p-6 rounded-xl text-center"
                >
                  <img
                    src={sdk.logo || "/placeholder.svg"}
                    alt={`${sdk.name} logo`}
                    className="w-12 h-12 mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {sdk.name}
                  </h3>
                  <code className="bg-slate-900 px-3 py-2 rounded text-sm text-teal-400 block">
                    {sdk.installCommand}
                  </code>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Developer Experience
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-teal-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckIcon />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Comprehensive Documentation
                </h3>
                <p className="text-gray-400">
                  Clear, detailed docs with code examples and interactive API
                  explorer.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-teal-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckIcon />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Sandbox Environment
                </h3>
                <p className="text-gray-400">
                  Test your integration safely with our full-featured sandbox.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-teal-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckIcon />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Webhooks
                </h3>
                <p className="text-gray-400">
                  Real-time notifications for payment events and status changes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Building?
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Get your API keys and start accepting payments in minutes.
            </p>
            <Button variant="default" className="px-8 py-4" asChild>
              <Link href="/signup">Get API Keys</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
