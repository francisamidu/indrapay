import type { Metadata } from "next";
import {
  ArrowRight01Icon as ArrowRight,
  Calendar01Icon as Calendar,
  UserAccountIcon as User,
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
  title: "News & Press | Indrapay",
  description:
    "Latest news, press releases, and updates from Indrapay. Stay informed about our product launches, partnerships, and company milestones.",
};

export default function NewsPage() {
  const newsItems = [
    {
      title:
        "Indrapay Raises $50M Series B to Expand Cross-Border Payment Infrastructure",
      excerpt:
        "Funding will accelerate global expansion and product development, with focus on emerging markets and SME solutions.",
      date: "2024-01-15",
      author: "Press Team",
      category: "Funding",
      featured: true,
    },
    {
      title:
        "Partnership with Major European Bank Enables Instant SEPA Transfers",
      excerpt:
        "New partnership reduces settlement times to under 10 seconds for European businesses using Indrapay.",
      date: "2024-01-10",
      author: "Product Team",
      category: "Partnership",
    },
    {
      title:
        "Indrapay Launches Multi-Currency Wallet API for Fintech Platforms",
      excerpt:
        "New API enables fintech companies to offer multi-currency wallet services to their customers with just a few lines of code.",
      date: "2024-01-05",
      author: "Engineering Team",
      category: "Product Launch",
    },
    {
      title: "Q4 2023 Results: 300% Growth in Transaction Volume",
      excerpt:
        "Record quarter driven by expansion in Asia-Pacific markets and increased adoption by e-commerce platforms.",
      date: "2023-12-20",
      author: "Executive Team",
      category: "Company Update",
    },
    {
      title: "Indrapay Achieves SOC 2 Type II Compliance Certification",
      excerpt:
        "Certification demonstrates our commitment to security and data protection for enterprise customers.",
      date: "2023-12-15",
      author: "Security Team",
      category: "Compliance",
    },
    {
      title: "New Singapore Office Opens to Serve Asia-Pacific Markets",
      excerpt:
        "Regional headquarters will support growing customer base and enable faster local payment method integrations.",
      date: "2023-12-10",
      author: "Operations Team",
      category: "Company Update",
    },
  ];

  const categories = [
    "All",
    "Funding",
    "Partnership",
    "Product Launch",
    "Company Update",
    "Compliance",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-teal-500/10 text-teal-400 border-teal-500/20">
              News & Press
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Latest
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
                {" "}
                Updates
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay informed about our latest product launches, partnerships,
              company milestones, and industry insights from the Indrapay team.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={
                  index === 0
                    ? "bg-teal-500 hover:bg-teal-600 text-white"
                    : "border-gray-600 text-gray-300 hover:bg-gray-800"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="pb-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Featured</h2>
          </div>

          {newsItems
            .filter((item) => item.featured)
            .map((item, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:border-teal-500/50 transition-colors mb-8"
              >
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge
                      variant="secondary"
                      className="bg-teal-500/10 text-teal-400 border-teal-500/20"
                    >
                      {item.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-white text-2xl mb-3">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-lg">
                    {item.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {new Date(item.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2" />
                        {item.author}
                      </div>
                    </div>
                    <Button className="bg-teal-500 hover:bg-teal-600 text-white">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </section>

      {/* All Articles */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">All News</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems
              .filter((item) => !item.featured)
              .map((item, index) => (
                <Card
                  key={index}
                  className="bg-slate-800/50 border-slate-700 hover:border-teal-500/50 transition-colors"
                >
                  <CardHeader>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge
                        variant="secondary"
                        className="bg-slate-700 text-gray-300"
                      >
                        {item.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-white text-lg mb-3">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      {item.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-400">
                        <div className="flex items-center mb-1">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(item.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </div>
                        <div className="flex items-center">
                          <User className="h-3 w-3 mr-1" />
                          {item.author}
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-teal-500/50 text-teal-400 hover:bg-teal-500/10 bg-transparent"
                      >
                        Read
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to our newsletter to get the latest news and updates
            delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-500"
            />
            <Button className="bg-teal-500 hover:bg-teal-600 text-white px-6">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Media Resources
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Download our media kit for logos, brand guidelines, and press
            materials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-teal-500 hover:bg-teal-600 text-white"
            >
              Download Media Kit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
            >
              Contact Press Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
