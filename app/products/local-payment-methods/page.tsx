import type { Metadata } from "next"
import { ArrowRight, CreditCard, Smartphone, Building, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Local Payment Methods | Indrapay",
  description:
    "Accept payments through local payment methods worldwide. From mobile wallets to bank transfers, reach customers with their preferred payment options.",
}

export default function LocalPaymentMethodsPage() {
  const regions = [
    {
      region: "Asia Pacific",
      methods: [
        { name: "Alipay", country: "China", icon: "🇨🇳" },
        { name: "WeChat Pay", country: "China", icon: "🇨🇳" },
        { name: "UPI", country: "India", icon: "🇮🇳" },
        { name: "GrabPay", country: "Southeast Asia", icon: "🌏" },
        { name: "PayNow", country: "Singapore", icon: "🇸🇬" },
        { name: "PromptPay", country: "Thailand", icon: "🇹🇭" },
      ],
    },
    {
      region: "Europe",
      methods: [
        { name: "SEPA", country: "EU", icon: "🇪🇺" },
        { name: "iDEAL", country: "Netherlands", icon: "🇳🇱" },
        { name: "Sofort", country: "Germany", icon: "🇩🇪" },
        { name: "Bancontact", country: "Belgium", icon: "🇧🇪" },
        { name: "Klarna", country: "Nordic", icon: "🇸🇪" },
        { name: "Giropay", country: "Germany", icon: "🇩🇪" },
      ],
    },
    {
      region: "Latin America",
      methods: [
        { name: "PIX", country: "Brazil", icon: "🇧🇷" },
        { name: "SPEI", country: "Mexico", icon: "🇲🇽" },
        { name: "PSE", country: "Colombia", icon: "🇨🇴" },
        { name: "Boleto", country: "Brazil", icon: "🇧🇷" },
        { name: "OXXO", country: "Mexico", icon: "🇲🇽" },
        { name: "Rapipago", country: "Argentina", icon: "🇦🇷" },
      ],
    },
  ]

  const features = [
    {
      icon: CreditCard,
      title: "Universal Acceptance",
      description: "Support 200+ local payment methods across 60+ countries",
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Seamless mobile payment experience with native app integrations",
    },
    {
      icon: Building,
      title: "Bank Integration",
      description: "Direct bank connections for faster settlement and lower costs",
    },
    {
      icon: Users,
      title: "Local Expertise",
      description: "Regional compliance and customer support in local languages",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-teal-500/10 text-teal-400 border-teal-500/20">Local Payment Methods</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Pay Like a
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400"> Local</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Accept payments through local payment methods worldwide. From mobile wallets to bank transfers, reach
              customers with their preferred payment options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
                Explore Methods
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
              >
                Integration Guide
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {[
              { value: "200+", label: "Payment Methods" },
              { value: "60+", label: "Countries" },
              { value: "95%", label: "Success Rate" },
              { value: "<3s", label: "Processing Time" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-teal-400 mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Payment Methods */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Regional Payment Methods</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Connect with customers using the payment methods they know and trust in their region.
            </p>
          </div>

          <div className="space-y-12">
            {regions.map((region, regionIndex) => (
              <div key={regionIndex}>
                <h3 className="text-2xl font-bold text-white mb-6">{region.region}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {region.methods.map((method, methodIndex) => (
                    <Card
                      key={methodIndex}
                      className="bg-slate-800/50 border-slate-700 hover:border-teal-500/50 transition-colors"
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-white text-lg">{method.name}</CardTitle>
                          <span className="text-2xl">{method.icon}</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-300">{method.country}</CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Local Payment Methods?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700">
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

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Start Accepting Local Payments</h2>
          <p className="text-xl text-gray-300 mb-8">
            Integrate local payment methods and increase your conversion rates globally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
