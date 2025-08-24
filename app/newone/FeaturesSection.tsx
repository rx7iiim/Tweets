import { Zap, Shield, Globe, BarChart3 } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Zap className="h-6 w-6 text-white" />,
      title: "Real-time Analytics",
      description:
        "Get instant insights with live data updates and interactive charts.",
    },
    {
      icon: <Shield className="h-6 w-6 text-white" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guaranteed.",
    },
    {
      icon: <Globe className="h-6 w-6 text-white" />,
      title: "Global Scale",
      description: "Built to scale globally with multi-region support.",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-white" />,
      title: "Custom Dashboards",
      description:
        "Create personalized dashboards tailored to your specific needs.",
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-black/10 to-black/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-purple-300 font-semibold tracking-wide uppercase">
            Features
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Everything you need to succeed
          </p>
          <p className="mt-4 max-w-2xl text-xl text-purple-200 lg:mx-auto">
            Our platform offers a comprehensive suite of tools designed to help
            you make data-driven decisions.
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="pt-6 group hover:transform hover:scale-105 transition-all duration-500"
              >
                <div className="flow-root bg-gradient-to-br from-purple-900/50 to-pink-900/30 rounded-lg px-6 pb-8 border border-white/10 backdrop-blur-sm h-full">
                  <div className="-mt-6">
                    <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-md shadow-lg">
                      {feature.icon}
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-white tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-base text-purple-200">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
