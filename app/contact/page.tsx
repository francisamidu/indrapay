"use client";

import type React from "react";

import { JSX, useState } from "react";
import { Button } from "@/components/ui/button";

interface ContactForm {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

interface FAQ {
  question: string;
  answer: string;
}

export default function ContactPage(): JSX.Element {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    alert("Thank you for your message! We'll get back to you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const faqs: FAQ[] = [
    {
      question: "How long does integration take?",
      answer:
        "Most developers can integrate our API in under an hour. Our comprehensive documentation and SDKs make the process straightforward.",
    },
    {
      question: "What countries do you support?",
      answer:
        "We support payments in 50+ countries with local payment methods. Contact us for specific country availability.",
    },
    {
      question: "Is there a minimum transaction volume?",
      answer:
        "No, there are no minimum transaction volumes or monthly commitments. You only pay for successful transactions.",
    },
    {
      question: "How secure is Indrapay?",
      answer:
        "We are PCI DSS Level 1 certified and use bank-grade encryption. All sensitive data is tokenized and never stored on our servers.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "Yes, you can process full or partial refunds through our API or dashboard. Refund fees may apply depending on the payment method.",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Get in
            <span className="bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">
              {" "}
              Touch
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-400">
            Have questions? Need help with integration? Our team is here to
            support you every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-teal-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Email Support
              </h3>
              <p className="text-gray-400 mb-4">
                Get help with technical questions and account issues.
              </p>
              <a
                href="mailto:support@indrapay.com"
                className="text-teal-400 hover:text-teal-300"
              >
                support@indrapay.com
              </a>
            </div>
            <div className="text-center">
              <div className="bg-teal-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Live Chat
              </h3>
              <p className="text-gray-400 mb-4">
                Chat with our support team in real-time.
              </p>
              <button className="text-teal-400 hover:text-teal-300">
                Start Chat
              </button>
            </div>
            <div className="text-center">
              <div className="bg-teal-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Sales</h3>
              <p className="text-gray-400 mb-4">
                Speak with our sales team about enterprise solutions.
              </p>
              <a
                href="tel:+1-555-0123"
                className="text-teal-400 hover:text-teal-300"
              >
                +1 (555) 012-3456
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Send us a Message
              </h2>
              <p className="text-gray-400">
                We'll get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-teal-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-teal-500"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-teal-500"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-teal-500"
                >
                  <option value="">Select a subject</option>
                  <option value="technical">Technical Support</option>
                  <option value="sales">Sales Inquiry</option>
                  <option value="partnership">Partnership</option>
                  <option value="billing">Billing Question</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-teal-500"
                  placeholder="Tell us how we can help..."
                />
              </div>

              <Button className="block w-full">
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
