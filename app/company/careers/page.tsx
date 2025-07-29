import type { Metadata } from "next";
import {
  ArrowRight01Icon as ArrowRight,
  MapPinIcon as MapPin,
  Clock01Icon as Clock,
  UserAccountIcon as Users,
  HeartCheckIcon as Heart,
  ZapIcon as Zap,
  GlobeIcon as Globe,
} from "hugeicons-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Careers | Indrapay",
  description:
    "Join the Indrapay team and help build the future of cross-border payments. Explore open positions and grow your career with us.",
};

export default function CareersPage() {
  const values = [
    {
      icon: Globe,
      title: "Global Impact",
      description:
        "Build products that connect businesses and people across borders",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description:
        "Push the boundaries of what's possible in financial technology",
    },
    {
      icon: Users,
      title: "Diverse Team",
      description:
        "Work with talented people from different backgrounds and cultures",
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "Flexible work arrangements and comprehensive benefits",
    },
  ];

  const openPositions = [
    {
      title: "Senior Backend Engineer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      description:
        "Build scalable payment infrastructure that processes millions of transactions daily.",
    },
    {
      title: "Product Manager - Cross-Border Payments",
      department: "Product",
      location: "Remote / London",
      type: "Full-time",
      description:
        "Lead product strategy for our core cross-border payment products.",
    },
    {
      title: "Senior Frontend Engineer",
      department: "Engineering",
      location: "Remote / Singapore",
      type: "Full-time",
      description:
        "Create beautiful, intuitive user experiences for our developer and merchant dashboards.",
    },
    {
      title: "Compliance Manager",
      department: "Legal & Compliance",
      location: "New York",
      type: "Full-time",
      description:
        "Ensure regulatory compliance across multiple jurisdictions and payment corridors.",
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description:
        "Build and maintain the infrastructure that powers our global payment network.",
    },
    {
      title: "Business Development Manager",
      department: "Sales",
      location: "Remote / Dubai",
      type: "Full-time",
      description:
        "Drive partnerships and business growth in emerging markets.",
    },
  ];

  const benefits = [
    "Competitive salary and equity package",
    "Comprehensive health, dental, and vision insurance",
    "Flexible PTO and sabbatical programs",
    "Remote-first culture with co-working stipends",
    "Professional development budget",
    "Top-tier equipment and home office setup",
    "Annual team retreats and offsites",
    "Parental leave and family support",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-teal-500/10 text-teal-400 border-teal-500/20">
              Careers at Indrapay
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Build the Future of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
                {" "}
                Global Payments
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our mission to make cross-border payments accessible,
              affordable, and instant for businesses worldwide. Work with a
              diverse team of innovators building the financial infrastructure
              of tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-teal-500 hover:bg-teal-600 text-white"
              >
                View Open Positions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
              >
                Learn About Our Culture
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {[
              { value: "150+", label: "Team Members" },
              { value: "25+", label: "Countries" },
              { value: "4.9/5", label: "Glassdoor Rating" },
              { value: "95%", label: "Employee Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-teal-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our culture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:border-teal-500/50 transition-colors"
              >
                <CardHeader>
                  <value.icon className="h-12 w-12 text-teal-400 mb-4" />
                  <CardTitle className="text-white">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join our team and help shape the future of global payments.
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:border-teal-500/50 transition-colors"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-white text-xl mb-2">
                        {position.title}
                      </CardTitle>
                      <CardDescription className="text-gray-300">
                        {position.description}
                      </CardDescription>
                    </div>
                    <Button className="bg-teal-500 hover:bg-teal-600 text-white shrink-0">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center text-gray-400">
                      <Users className="h-4 w-4 mr-2" />
                      {position.department}
                    </div>
                    <div className="flex items-center text-gray-400">
                      <MapPin className="h-4 w-4 mr-2" />
                      {position.location}
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Clock className="h-4 w-4 mr-2" />
                      {position.type}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Benefits & Perks
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We believe in taking care of our team so they can do their best
              work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center text-gray-300">
                <div className="w-2 h-2 bg-teal-400 rounded-full mr-3 shrink-0" />
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Join Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Don't see a role that fits? We're always looking for exceptional
            talent. Send us your resume!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-teal-500 hover:bg-teal-600 text-white"
            >
              Send Resume
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
