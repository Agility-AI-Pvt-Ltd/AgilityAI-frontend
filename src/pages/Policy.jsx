import React from "react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen ">
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
            Terms of{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 text-transparent bg-clip-text">
              Service
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
                Welcome to{" "}
                <span className="text-blue-400 font-bold">AgilityAI</span>. By
                accessing or using our website or services, you agree to be
                bound by the following Terms of Service. Please read them
                carefully before proceeding.
              </p>
            </div>
          </div>
        </section>

        {/* Terms Sections */}
        <section className="space-y-8 max-w-5xl mx-auto">
          {[
            {
              title: "1. Use of Our Platform",
              icon: "🖥️",
              content: [
                "You may use our platform only if you are 16 years or older and legally capable of entering into a contract.",
                "You agree to use the platform in accordance with these Terms and all applicable laws and regulations.",
              ],
            },
            {
              title: "2. Account Registration",
              icon: "👤",
              content: [
                "Certain features may require you to create an account. You are responsible for maintaining the confidentiality of your login credentials and all activities under your account.",
                "You agree to provide accurate and complete information and to update it as needed.",
              ],
            },
            {
              title: "3. Services and Access",
              icon: "🔧",
              content: [
                "We provide access to technology-related services and tools. We may add, modify, or remove features at our discretion.",
                "We do not guarantee uninterrupted or error-free access, though we strive to maintain uptime and performance.",
              ],
            },
            {
              title: "4. User Conduct",
              icon: "⚖️",
              content: [
                "You agree not to:",
                "• Use the platform for illegal, abusive, or harmful purposes",
                "• Upload or share content that is offensive, defamatory, or infringes on any third-party rights",
                "• Attempt to disrupt or interfere with the platform's functioning",
              ],
            },
            {
              title: "5. Intellectual Property",
              icon: "🛡️",
              content: [
                "All content, design elements, logos, and software on our platform are the intellectual property of AgilityAI or its partners.",
                "You may not copy, distribute, or reproduce any part of the platform without written permission.",
              ],
            },
            {
              title: "6. Payments",
              icon: "💳",
              content: [
                "Any fees for paid services will be clearly communicated. You agree to pay applicable charges as per the plan or service selected.",
                "Failure to make timely payments may result in suspension or termination of services.",
              ],
            },
            {
              title: "7. Termination",
              icon: "🚪",
              content: [
                "You may stop using our services as per the agreement.",
                "We reserve the right to suspend or terminate your access if we believe you have violated these Terms or any applicable law.",
              ],
            },
            {
              title: "8. Disclaimers",
              icon: "⚠️",
              content: [
                'The platform and services are provided "as is" and "as available."',
              ],
            },
            {
              title: "9. Limitation of Liability",
              icon: "🔒",
              content: [
                "To the fullest extent permitted by law, we are not liable for any indirect, incidental, or consequential damages arising from your use of the platform.",
                "Our total liability for any claim shall not exceed the amount you paid us in the last 6 months (if any).",
              ],
            },
            {
              title: "10. Indemnity",
              icon: "🤝",
              content: [
                "You agree to indemnify and hold harmless AgilityAI, its team, and affiliates against any claims, damages, or expenses arising from your use of the platform or violation of these Terms.",
              ],
            },
            {
              title: "11. Changes to Terms",
              icon: "📝",
              content: [
                "We may update these Terms from time to time. We will notify users by posting the revised version on our site. Continued use after changes means you accept the updated Terms.",
              ],
            },
            {
              title: "12. Governing Law",
              icon: "🏛️",
              content: [
                "These Terms shall be governed by and interpreted in accordance with the laws of India. Any disputes will be subject to the exclusive jurisdiction of the courts of India.",
              ],
            },
            {
              title: "13. Contact Us",
              icon: "📧",
              content: [
                "If you have any questions or concerns about these Terms, please reach out to us at: ",
                <a
                  key="contact-email"
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
              Questions about our Terms?
            </h3>
            <p className="text-gray-300 mb-6">
              We&#39;re here to help clarify anything you need to know.
            </p>
            <a
              href="mailto:contact@agilityai.in"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>Get in Touch</span>
              <span className="text-xl">→</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
