import type { Metadata } from "next"
import { ArrowRight, Download, Github, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "SDKs & Libraries | Indrapay",
  description:
    "Official SDKs and libraries for popular programming languages. Integrate Indrapay into your application with just a few lines of code.",
}

export default function SDKsLibrariesPage() {
  const sdks = [
    {
      language: "Node.js",
      icon: "🟢",
      version: "v2.1.0",
      downloads: "50K+",
      stars: "1.2K",
      description: "Official Node.js SDK for server-side JavaScript applications",
      installCommand: "npm install indrapay",
      githubUrl: "https://github.com/indrapay/indrapay-node",
    },
    {
      language: "Python",
      icon: "🐍",
      version: "v2.0.5",
      downloads: "35K+",
      stars: "890",
      description: "Python SDK with support for Django, Flask, and FastAPI",
      installCommand: "pip install indrapay",
      githubUrl: "https://github.com/indrapay/indrapay-python",
    },
    {
      language: "PHP",
      icon: "🐘",
      version: "v1.8.2",
      downloads: "25K+",
      stars: "650",
      description: "PHP SDK compatible with Laravel, Symfony, and vanilla PHP",
      installCommand: "composer require indrapay/indrapay-php",
      githubUrl: "https://github.com/indrapay/indrapay-php",
    },
    {
      language: "Ruby",
      icon: "💎",
      version: "v1.7.1",
      downloads: "18K+",
      stars: "420",
      description: "Ruby gem with Rails integration and comprehensive documentation",
      installCommand: "gem install indrapay",
      githubUrl: "https://github.com/indrapay/indrapay-ruby",
    },
    {
      language: "Java",
      icon: "☕",
      version: "v1.6.0",
      downloads: "22K+",
      stars: "380",
      description: "Java SDK for Spring Boot, Android, and enterprise applications",
      installCommand: 'implementation "com.indrapay:indrapay-java:1.6.0"',
      githubUrl: "https://github.com/indrapay/indrapay-java",
    },
    {
      language: "Go",
      icon: "🐹",
      version: "v1.5.3",
      downloads: "12K+",
      stars: "290",
      description: "Lightweight Go SDK for high-performance applications",
      installCommand: "go get github.com/indrapay/indrapay-go",
      githubUrl: "https://github.com/indrapay/indrapay-go",
    },
  ]

  const codeExamples = {
    nodejs: `const Indrapay = require('indrapay');
const indrapay = new Indrapay('sk_test_...');

// Create a payment
const payment = await indrapay.payments.create({
  amount: 1000,
  currency: 'USD',
  destination_currency: 'EUR',
  recipient: {
    email: 'recipient@example.com'
  }
});

console.log('Payment created:', payment.id);`,
    python: `import indrapay

# Initialize client
client = indrapay.Client('sk_test_...')

# Create a payment
payment = client.payments.create(
    amount=1000,
    currency='USD',
    destination_currency='EUR',
    recipient={
        'email': 'recipient@example.com'
    }
)

print(f'Payment created: {payment.id}')`,
    php: `<?php
require_once 'vendor/autoload.php';

use Indrapay\\IndrapayClient;

$indrapay = new IndrapayClient('sk_test_...');

// Create a payment
$payment = $indrapay->payments->create([
    'amount' => 1000,
    'currency' => 'USD',
    'destination_currency' => 'EUR',
    'recipient' => [
        'email' => 'recipient@example.com'
    ]
]);

echo 'Payment created: ' . $payment->id;`,
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-teal-500/10 text-teal-400 border-teal-500/20">SDKs & Libraries</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Code in Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
                {" "}
                Language
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Official SDKs and libraries for popular programming languages. Integrate Indrapay into your application
              with just a few lines of code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
                Browse SDKs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
              >
                View on GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get Started in Minutes</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See how easy it is to create your first payment with our SDKs.
            </p>
          </div>

          <Tabs defaultValue="nodejs" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-slate-800 border-slate-700 max-w-md mx-auto">
              <TabsTrigger value="nodejs" className="data-[state=active]:bg-teal-500 data-[state=active]:text-white">
                Node.js
              </TabsTrigger>
              <TabsTrigger value="python" className="data-[state=active]:bg-teal-500 data-[state=active]:text-white">
                Python
              </TabsTrigger>
              <TabsTrigger value="php" className="data-[state=active]:bg-teal-500 data-[state=active]:text-white">
                PHP
              </TabsTrigger>
            </TabsList>
            {Object.entries(codeExamples).map(([key, code]) => (
              <TabsContent key={key} value={key}>
                <div className="bg-slate-900 border border-slate-700 rounded-lg p-6 relative">
                  <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{code}</code>
                  </pre>
                  <Button
                    size="sm"
                    variant="outline"
                    className="absolute top-4 right-4 border-slate-600 text-gray-400 hover:bg-slate-800 bg-transparent"
                  >
                    Copy
                  </Button>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* SDKs Grid */}
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Official SDKs</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose from our collection of officially maintained SDKs for popular programming languages.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sdks.map((sdk, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-teal-500/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{sdk.icon}</span>
                      <CardTitle className="text-white">{sdk.language}</CardTitle>
                    </div>
                    <Badge variant="secondary" className="bg-slate-700 text-gray-300">
                      {sdk.version}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-300">{sdk.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-400">
                        <Download className="h-4 w-4 mr-1" />
                        {sdk.downloads}
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Star className="h-4 w-4 mr-1" />
                        {sdk.stars}
                      </div>
                    </div>

                    <div className="bg-slate-900 border border-slate-700 rounded p-3">
                      <code className="text-sm text-teal-400">{sdk.installCommand}</code>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="bg-teal-500 hover:bg-teal-600 text-white flex-1">
                        Get Started
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-slate-600 text-gray-300 hover:bg-slate-800 bg-transparent"
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community SDKs */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Community Contributions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              SDKs and integrations built by our amazing developer community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "React Native", author: "community", stars: "180" },
              { name: "Flutter/Dart", author: "community", stars: "95" },
              { name: "C# / .NET", author: "community", stars: "120" },
              { name: "Rust", author: "community", stars: "65" },
            ].map((sdk, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 text-center">
                <CardHeader>
                  <CardTitle className="text-white text-lg">{sdk.name}</CardTitle>
                  <CardDescription className="text-gray-400">by {sdk.author}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center text-gray-400 mb-4">
                    <Star className="h-4 w-4 mr-1" />
                    {sdk.stars}
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-slate-600 text-gray-300 hover:bg-slate-800 bg-transparent"
                  >
                    View on GitHub
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Start Building Today</h2>
          <p className="text-xl text-gray-300 mb-8">
            Choose your preferred language and start integrating Indrapay in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
              Download SDK
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
