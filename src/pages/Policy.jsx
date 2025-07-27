import React from "react";

const Policy = () => {
  return (
    <div className="min-h-screen">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-12">
        {/* Page Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6">
            Privacy{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 text-transparent bg-clip-text">
              Policy
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        {/* Effective Date and Intro */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <p className="text-green-400 font-semibold text-sm uppercase tracking-wider">
                  Effective Date: 27 July 2025
                </p>
              </div>
              <p className="text-gray-300 text-xl leading-relaxed">
                This Privacy Policy outlines how{" "}
                <span className="text-blue-400 font-bold">AgilityAI</span>{" "}
                collects, uses, and protects your personal data. Please read it
                carefully to understand your rights and our responsibilities.
              </p>
            </div>
          </div>
        </section>

        {/* Policy Sections */}
        <section className="space-y-8 max-w-5xl mx-auto">
          {[
            {
              title: "Scope and Applicability",
              icon: "📘",
              content: [
                "This Privacy Policy applies to all personal data collected through our website, mobile applications (if any), and related services.",
                "It does not apply to third-party websites or services linked through our platform.",
              ],
            },
            {
              title: "Information We Collect",
              icon: "📊",
              content: [
                "A. Information You Provide Voluntarily:",
                "• Full name, email address, phone number",
                "• Company/organization name",
                "• Payment or billing details (for paid services)",
                "• Support or inquiry communication content",
                "",
                "B. Information Collected Automatically:",
                "• IP address, approximate geolocation",
                "• Browser type, OS, device info",
                "• Pages visited, time spent, navigation paths",
                "",
                "C. Cookies and Similar Technologies:",
                "We use cookies to enhance user experience and analyze trends. Cookie preferences can be managed via browser settings.",
              ],
            },
            {
              title: "Lawful Bases for Processing",
              icon: "⚖️",
              content: [
                "We process your data under one or more of the following legal bases:",
                "• Consent",
                "• Contractual Necessity",
                "• Legal Obligation",
                "• Legitimate Interest",
              ],
            },
            {
              title: "How We Use Your Information",
              icon: "🛠️",
              content: [
                "• To deliver and maintain our Services",
                "• To respond to inquiries and provide support",
                "• To process transactions and send updates",
                "• To analyze usage trends and improve functionality",
                "• To personalize content and ensure security",
                "• To comply with legal obligations",
                "Note: We do not sell your personal data.",
              ],
            },
            {
              title: "Disclosure of Information",
              icon: "📤",
              content: [
                "We may share your information with:",
                "• Service Providers",
                "• Affiliates",
                "• Legal Authorities",
                "• Business Transfers (e.g., mergers, acquisitions)",
              ],
            },
            {
              title: "Data Retention",
              icon: "🗂️",
              content: [
                "We retain personal data only as long as necessary to fulfill the purposes outlined or as required by law.",
              ],
            },
            {
              title: "International Transfers",
              icon: "🌍",
              content: [
                "Your data may be processed in countries outside your own. We take necessary steps to ensure appropriate safeguards are in place.",
              ],
            },
            {
              title: "Security of Your Information",
              icon: "🔐",
              content: [
                "We implement reasonable technical and organizational security measures to protect your personal data from unauthorized access, misuse, or loss.",
              ],
            },
            {
              title: "Your Rights and Choices",
              icon: "🙋‍♂️",
              content: [
                "Depending on your location, you may have rights to access, correct, delete, or restrict your personal data.",
                "You may also have the right to object to or withdraw consent.",
              ],
            },
            {
              title: "Children’s Privacy",
              icon: "🧒",
              content: [
                "Our Services are not intended for individuals under the age of 16.",
                "We do not knowingly collect personal data from children.",
              ],
            },
            {
              title: "Changes to This Privacy Policy",
              icon: "📝",
              content: [
                "We may update this Privacy Policy from time to time.",
                "Material changes will be communicated clearly.",
                "Continued use of our Services after changes constitutes acceptance.",
              ],
            },
            {
              title: "Contact Information",
              icon: "📧",
              content: [
                "If you have any questions or concerns regarding this policy, please contact us at:",
                <a
                  key="email"
                  href="mailto:contact@agilityai.in"
                  className="text-blue-400 hover:text-cyan-400 underline transition-colors duration-200 font-semibold"
                >
                  contact@agilityai.in
                </a>,
              ],
            },
          ].map((section, idx) => (
            <div
              key={idx}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:bg-white/8 transition-all duration-300 hover:border-white/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-3xl bg-gradient-to-br from-blue-400 to-cyan-400 p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {section.icon}
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {section.title}
                </h2>
              </div>
              <div className="space-y-3 pl-16">
                {section.content.map((line, i) => (
                  <p
                    key={i}
                    className="text-gray-300 text-lg leading-relaxed hover:text-gray-200 transition-colors duration-200"
                  >
                    {line}
                  </p>
                ))}
              </div>
              <div className="mt-6 w-full h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"></div>
            </div>
          ))}
        </section>

        {/* Footer CTA */}
        <section className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have privacy questions?
            </h3>
            <p className="text-gray-300 mb-6">
              Reach out to us and we’ll be happy to help.
            </p>
            <a
              href="mailto:contact@agilityai.in"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>Contact Support</span>
              <span className="text-xl">→</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Policy;
