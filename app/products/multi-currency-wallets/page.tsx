import { Metadata } from 'next'
import { ArrowRight, Wallet, Shield, BarChart3, Globe, Zap, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Multi-Currency Wallets | Indrapay',
  description: 'Create and manage multi-currency wallets for your users. Hold, convert, and transfer funds across 40+ currencies with real-time rates.',
}

export default function MultiCurrencyWalletsPage() {
  const features = [
    {
      icon: Wallet,
      title: 'Virtual Wallets',
      description: 'Create unlimited virtual wallets for each currency and user segment'
    },
    {
      icon: BarChart3,
      title: 'Real-time Rates',
      description: 'Access live exchange rates with transparent pricing and no hidden markups'
    },
    {
      icon: Shield,
      title: 'Segregated Funds',
      description: 'Client funds are held in segregated accounts with tier-1 banking partners'
    },
    {
      icon: Zap,
      title: 'Instant Conversion',
      description: 'Convert between currencies instantly with competitive spreads'
    }
  ]

  const currencies = [
    'USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY', 'HKD', 'SGD',
    'INR', 'BRL', 'MXN', 'ZAR', 'KRW', 'THB', 'MYR', 'PHP', 'IDR', 'VND'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-teal-500/10 text-teal-400 border-teal-500/20">
              Multi-Currency Wallets
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              One Wallet,
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
                {' '}Every Currency
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Empower your users with multi-currency wallets that support 40+ currencies. 
              Hold, convert, and transfer funds globally with enterprise-grade security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
                Create Wallet
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                View API Docs
              </Button>
            </div>
          </div>

          {/* Currency Grid */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Supported Currencies</h3>
            <div className="grid grid-cols-4 md:grid-cols-10 gap-4">
              {currencies.map((currency, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg p-3 text-center">
                  <div className="text-teal-400 font-bold">{currency}</div>
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Enterprise-Grade Wallet Infrastructure
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built for scale with the security and compliance features 
              that enterprise customers demand.
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
                  <CardDescription className="text-gray-300">
                    {feature.description}
                  </CardDescription>
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Built for Every Use Case
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">For Fintech Platforms</h3>
              <ul className="space-y-4">
                {[
                  'White-label wallet solutions',
                  'Customizable user interfaces',
                  'Advanced reporting and analytics',
                  'Compliance and KYC integration'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-teal-400 rounded-full mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">For Marketplaces</h3>
              <ul className="space-y-4">
                {[
                  'Escrow and split payment support',
                  'Multi-party settlement',
                  'Automated currency conversion',
                  'Real-time balance tracking'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-teal-400 rounded-full mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Start Building Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Integrate multi-currency wallets into your platform with just a few API calls.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
