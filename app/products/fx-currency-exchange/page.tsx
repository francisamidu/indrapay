import type { Metadata } from "next"
import { ArrowRight, TrendingUp, Shield, Clock, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "FX & Currency Exchange | Indrapay",
  description:
    "Access competitive foreign exchange rates and currency conversion services. Real-time rates, transparent pricing, and enterprise-grade execution.",
}

export default function FXCurrencyExchangePage() {
  const features = [
    {
      icon: TrendingUp,
      title: "Competitive Rates",
      description: "Access institutional FX rates with transparent pricing and no hidden markups",
    },
    {
      icon: Clock,
      title: "Real-time Execution",
      description: "Execute trades instantly with real-time rate feeds and sub-second processing",
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Advanced hedging tools and risk management features for enterprise clients",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Comprehensive reporting and analytics for all your FX transactions",
    },
  ]

  const currencyPairs = [
    { from: "USD", to: "EUR", rate: "0.8456", change: "+0.12%" },
    { from: "GBP", to: "USD", rate: "1.2734", change: "-0.08%" },
    { from: "USD", to: "JPY", rate: "149.82", change: "+0.34%" },
    { from: "EUR", to: "GBP", rate: "0.8621", change: "+0.05%" },
    { from: "USD", to: "CAD", rate: "1.3456", change: "-0.15%" },
    { from: "AUD", to: "USD", rate: "0.6789", change: "+0.22%" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-teal-500/10 text-teal-400 border-teal-500/20">FX & Currency Exchange</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Enterprise
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
                {" "}
                FX Trading
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Access competitive foreign exchange rates and currency conversion services. Real-time rates, transparent
              pricing, and enterprise-grade execution for global businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
                Start Trading
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
              >
                View Rates
              </Button>
            </div>
          </div>

          {/* Live Rates Table */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Live Exchange Rates</h3>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden">
              <div className="grid grid-cols-4 gap-4 p-4 border-b border-slate-700 bg-slate-700/50">
                <div className="text-gray-300 font-semibold">Currency Pair</div>
                <div className="text-gray-300 font-semibold">Rate</div>
                <div className="text-gray-300 font-semibold">24h Change</div>
                <div className="text-gray-300 font-semibold">Action</div>
              </div>
              {currencyPairs.map((pair, index) => (
                <div
                  key={index}
                  className="grid grid-cols-4 gap-4 p-4 border-b border-slate-700 last:border-b-0 hover:bg-slate-700/30 transition-colors"
                >
                  <div className="text-white font-medium">
                    {pair.from}/{pair.to}
                  </div>
                  <div className="text-teal-400 font-mono">{pair.rate}</div>
                  <div className={`font-medium ${pair.change.startsWith("+") ? "text-green-400" : "text-red-400"}`}>
                    {pair.change}
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-teal-500/50 text-teal-400 hover:bg-teal-500/10 bg-transparent"
                  >
                    Trade
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Professional FX Trading Platform</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built for businesses that need reliable, fast, and cost-effective currency exchange services.
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

      {/* Use Cases Section */}
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Built for Every Business Need</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Import/Export Businesses",
                description: "Hedge currency risk and optimize cash flow with forward contracts and spot trades.",
                features: ["Forward contracts", "Spot trading", "Risk hedging", "Bulk conversions"],
              },
              {
                title: "E-commerce Platforms",
                description: "Automatically convert revenues from multiple currencies with competitive rates.",
                features: ["Auto-conversion", "Multi-currency pricing", "Settlement optimization", "Real-time rates"],
              },
              {
                title: "Financial Institutions",
                description: "White-label FX services for your clients with institutional-grade infrastructure.",
                features: ["White-label solution", "API integration", "Compliance tools", "Custom reporting"],
              },
            ].map((useCase, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">{useCase.title}</CardTitle>
                  <CardDescription className="text-gray-300">{useCase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {useCase.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-teal-400 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Optimize Your FX Operations?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get access to institutional FX rates and advanced trading tools designed for businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
              Open Trading Account
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
            >
              Request Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
