import { Metadata } from 'next'
import { ArrowRight, Globe, Shield, Zap, DollarSign, Clock, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cross-Border Payments | Indrapay',
  description: 'Send and receive payments globally with Indrapay\'s cross-border payment infrastructure. Fast, secure, and cost-effective international transfers.',
}

export default function CrossBorderPaymentsPage() {
  const features = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Send payments to 180+ countries with local settlement in major markets'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Real-time payments in supported corridors, same-day settlement globally'
    },
    {
      icon: Shield,
      title: 'Bank-Grade Security',
      description: 'End-to-end encryption with compliance across all major jurisdictions'
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'No hidden fees, competitive FX rates, and volume-based discounts'
    }
  ]

  const useCases = [
    {
      title: 'E-commerce Marketplaces',
      description: 'Enable sellers to receive payments from global buyers instantly',
      benefits: ['Multi-currency support', 'Automated settlements', 'Fraud protection']
    },
    {
      title: 'Freelancer Platforms',
      description: 'Pay contractors worldwide with minimal fees and maximum speed',
      benefits: ['Bulk payments', 'Tax compliance', 'Real-time tracking']
    },
    {
      title: 'Supply Chain Finance',
      description: 'Streamline B2B payments across international supply chains',
      benefits: ['Invoice automation', 'Working capital optimization', 'Multi-party settlements']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-teal-500/10 text-teal-400 border-teal-500/20">
              Cross-Border Payments
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Send Money
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
                {' '}Anywhere
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Power your global business with our cross-border payment infrastructure. 
              Send and receive payments in 40+ currencies with real-time settlement and competitive rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
                Start Integration
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                View Documentation
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {[
              { value: '180+', label: 'Countries' },
              { value: '40+', label: 'Currencies' },
              { value: '<2s', label: 'Settlement Time' },
              { value: '99.9%', label: 'Uptime' }
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Built for Global Scale
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our cross-border payment infrastructure is designed to handle high-volume, 
              mission-critical transactions with enterprise-grade reliability.
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
              Powering Global Businesses
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From startups to enterprises, see how businesses use our cross-border payments 
              to expand globally and serve customers worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">{useCase.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {useCase.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-teal-400 rounded-full mr-3" />
                        {benefit}
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
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Go Global?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start accepting and sending cross-border payments in minutes with our developer-friendly APIs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
              Get API Keys
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
