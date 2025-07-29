import type { Metadata } from "next"
import { ArrowRight, Code, Book, Zap, Shield, Copy, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "API Documentation | Indrapay",
  description:
    "Complete API documentation for Indrapay's cross-border payment platform. Get started with our RESTful APIs, webhooks, and SDKs.",
}

export default function APIDocumentationPage() {
  const apiEndpoints = [
    {
      method: "POST",
      endpoint: "/v1/payments",
      description: "Create a new payment",
      category: "Payments",
    },
    {
      method: "GET",
      endpoint: "/v1/payments/{id}",
      description: "Retrieve payment details",
      category: "Payments",
    },
    {
      method: "POST",
      endpoint: "/v1/wallets",
      description: "Create a multi-currency wallet",
      category: "Wallets",
    },
    {
      method: "GET",
      endpoint: "/v1/exchange-rates",
      description: "Get current exchange rates",
      category: "FX",
    },
    {
      method: "POST",
      endpoint: "/v1/webhooks",
      description: "Configure webhook endpoints",
      category: "Webhooks",
    },
  ]

  const codeExamples = {
    curl: `curl -X POST https://api.indrapay.com/v1/payments \\
  -H "Authorization: Bearer sk_test_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 1000,
    "currency": "USD",
    "destination_currency": "EUR",
    "recipient": {
      "email": "recipient@example.com",
      "name": "John Doe"
    }
  }'`,
    javascript: `const indrapay = require('indrapay')('sk_test_...');

const payment = await indrapay.payments.create({
  amount: 1000,
  currency: 'USD',
  destination_currency: 'EUR',
  recipient: {
    email: 'recipient@example.com',
    name: 'John Doe'
  }
});`,
    python: `import indrapay
indrapay.api_key = "sk_test_..."

payment = indrapay.Payment.create(
    amount=1000,
    currency='USD',
    destination_currency='EUR',
    recipient={
        'email': 'recipient@example.com',
        'name': 'John Doe'
    }
)`,
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-teal-500/10 text-teal-400 border-teal-500/20">API Documentation</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Developer
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
                {" "}
                Resources
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Complete API documentation for Indrapay's cross-border payment platform. Get started with our RESTful
              APIs, webhooks, and SDKs in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
                Get API Keys
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
              >
                Quick Start Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Quick Start</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get up and running with Indrapay APIs in just a few steps.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Create Your First Payment</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    1
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Get API Keys</h4>
                    <p className="text-gray-300">Sign up and get your test API keys from the dashboard.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    2
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Make API Call</h4>
                    <p className="text-gray-300">Use our REST API to create your first payment.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    3
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Handle Response</h4>
                    <p className="text-gray-300">Process the response and handle webhooks for updates.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Tabs defaultValue="curl" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-slate-800 border-slate-700">
                  <TabsTrigger value="curl" className="data-[state=active]:bg-teal-500 data-[state=active]:text-white">
                    cURL
                  </TabsTrigger>
                  <TabsTrigger
                    value="javascript"
                    className="data-[state=active]:bg-teal-500 data-[state=active]:text-white"
                  >
                    Node.js
                  </TabsTrigger>
                  <TabsTrigger
                    value="python"
                    className="data-[state=active]:bg-teal-500 data-[state=active]:text-white"
                  >
                    Python
                  </TabsTrigger>
                </TabsList>
                {Object.entries(codeExamples).map(([key, code]) => (
                  <TabsContent key={key} value={key}>
                    <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 relative">
                      <pre className="text-sm text-gray-300 overflow-x-auto">
                        <code>{code}</code>
                      </pre>
                      <Button
                        size="sm"
                        variant="outline"
                        className="absolute top-2 right-2 border-slate-600 text-gray-400 hover:bg-slate-800 bg-transparent"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">API Reference</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our complete API reference with detailed endpoint documentation.
            </p>
          </div>

          <div className="space-y-6">
            {apiEndpoints.map((endpoint, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-teal-500/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Badge
                        className={`${
                          endpoint.method === "GET"
                            ? "bg-green-500/10 text-green-400 border-green-500/20"
                            : endpoint.method === "POST"
                              ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                              : "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                        }`}
                      >
                        {endpoint.method}
                      </Badge>
                      <code className="text-teal-400 font-mono">{endpoint.endpoint}</code>
                    </div>
                    <Badge variant="secondary" className="bg-slate-700 text-gray-300">
                      {endpoint.category}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-300 mt-2">{endpoint.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    className="border-teal-500/50 text-teal-400 hover:bg-teal-500/10 bg-transparent"
                  >
                    View Details
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Code,
                title: "RESTful APIs",
                description: "Clean, intuitive REST APIs with comprehensive documentation",
              },
              {
                icon: Zap,
                title: "Real-time Webhooks",
                description: "Get instant notifications about payment status changes",
              },
              {
                icon: Shield,
                title: "Secure by Default",
                description: "Built-in security features and compliance standards",
              },
              {
                icon: Book,
                title: "Interactive Docs",
                description: "Test API calls directly from our documentation",
              },
            ].map((feature, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 text-center">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-teal-400 mx-auto mb-4" />
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Building?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get your API keys and start integrating Indrapay into your application today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
              Get API Keys
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
            >
              Join Developer Community
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
