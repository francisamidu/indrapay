import type { Metadata } from "next"
import { ArrowRight, Play, Shield, Database, Zap, TestTube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Sandbox Environment | Indrapay",
  description:
    "Test your integration safely with Indrapay's sandbox environment. No real money, full API functionality, and comprehensive testing tools.",
}

export default function SandboxPage() {
  const features = [
    {
      icon: Shield,
      title: "Safe Testing",
      description: "Test all functionality without processing real payments or moving actual money",
    },
    {
      icon: Database,
      title: "Realistic Data",
      description: "Use realistic test data that mirrors production scenarios and edge cases",
    },
    {
      icon: Zap,
      title: "Full API Access",
      description: "Complete access to all API endpoints and features available in production",
    },
    {
      icon: TestTube,
      title: "Test Scenarios",
      description: "Pre-built test scenarios for common use cases and error conditions",
    },
  ]

  const testCards = [
    {
      number: "4242424242424242",
      brand: "Visa",
      description: "Successful payment",
      cvc: "123",
      expiry: "12/25",
    },
    {
      number: "4000000000000002",
      brand: "Visa",
      description: "Card declined",
      cvc: "123",
      expiry: "12/25",
    },
    {
      number: "4000000000009995",
      brand: "Visa",
      description: "Insufficient funds",
      cvc: "123",
      expiry: "12/25",
    },
    {
      number: "4000000000000119",
      brand: "Visa",
      description: "Processing error",
      cvc: "123",
      expiry: "12/25",
    },
  ]

  const webhookEvents = [
    "payment.created",
    "payment.succeeded",
    "payment.failed",
    "payment.canceled",
    "wallet.created",
    "wallet.updated",
    "exchange_rate.updated",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-teal-500/10 text-teal-400 border-teal-500/20">Sandbox Environment</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Test Without
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400"> Risk</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Test your integration safely with our sandbox environment. No real money, full API functionality, and
              comprehensive testing tools to ensure your integration works perfectly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
                Access Sandbox
                <Play className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
              >
                View Test Data
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {[
              { value: "100%", label: "API Coverage" },
              { value: "50+", label: "Test Scenarios" },
              { value: "24/7", label: "Availability" },
              { value: "0$", label: "Cost to Test" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-teal-400 mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Everything You Need to Test</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our sandbox provides a complete testing environment that mirrors production functionality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-teal-500/50 transition-colors">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-teal-400 mb-4" />
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

      {/* Test Data Section */}
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Test Data & Scenarios</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Use our pre-configured test data to simulate different payment scenarios and edge cases.
            </p>
          </div>

          <Tabs defaultValue="cards" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-slate-800 border-slate-700 max-w-md mx-auto">
              <TabsTrigger value="cards" className="data-[state=active]:bg-teal-500 data-[state=active]:text-white">
                Test Cards
              </TabsTrigger>
              <TabsTrigger value="webhooks" className="data-[state=active]:bg-teal-500 data-[state=active]:text-white">
                Webhooks
              </TabsTrigger>
              <TabsTrigger
                value="currencies"
                className="data-[state=active]:bg-teal-500 data-[state=active]:text-white"
              >
                Currencies
              </TabsTrigger>
            </TabsList>

            <TabsContent value="cards" className="mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                {testCards.map((card, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-white">{card.brand}</CardTitle>
                        <Badge variant="secondary" className="bg-slate-700 text-gray-300">
                          {card.description}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 font-mono text-sm">
                        <div className="text-teal-400">Card: {card.number}</div>
                        <div className="text-gray-300">CVC: {card.cvc}</div>
                        <div className="text-gray-300">Expiry: {card.expiry}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="webhooks" className="mt-8">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Available Webhook Events</CardTitle>
                  <CardDescription className="text-gray-300">
                    Test webhook delivery with these event types
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {webhookEvents.map((event, index) => (
                      <div key={index} className="bg-slate-900 border border-slate-700 rounded p-3">
                        <code className="text-teal-400 text-sm">{event}</code>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="currencies" className="mt-8">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Test Currencies</CardTitle>
                  <CardDescription className="text-gray-300">
                    All production currencies are available for testing with fixed exchange rates
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
                    {["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "CHF", "CNY", "HKD", "SGD", "INR", "BRL"].map(
                      (currency, index) => (
                        <div key={index} className="bg-slate-900 border border-slate-700 rounded p-3 text-center">
                          <div className="text-teal-400 font-bold">{currency}</div>
                        </div>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Getting Started with Sandbox</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-teal-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Get Test API Keys</h3>
              <p className="text-gray-300">
                Sign up for a free account and get your sandbox API keys from the dashboard.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-teal-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Configure Your App</h3>
              <p className="text-gray-300">
                Point your application to our sandbox endpoints and start making test API calls.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-teal-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Test & Iterate</h3>
              <p className="text-gray-300">
                Use our test data to simulate different scenarios and perfect your integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Testing?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get your sandbox API keys and start testing your integration today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
              Get Sandbox Access
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
            >
              View Documentation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
