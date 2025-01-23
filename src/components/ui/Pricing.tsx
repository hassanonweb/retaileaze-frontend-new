import { CheckCircle, XCircle } from "lucide-react" // Updated icon imports

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "For small teams",
    features: [
      { feature: "10 user seats", active: true },
      { feature: "5 workspaces", active: true },
      { feature: "Single Sign-On (SSO)", active: false },
      { feature: "Two-factor authentication", active: false },
      { feature: "Caching and pre-aggregation", active: false },
    ],
    isEnterprise: false,
    isRecommended: false,
    buttonText: "Get started",
    buttonLink: "#",
  },
  {
    name: "Starter",
    price: "$50",
    description: "For growing teams",
    features: [
      { feature: "50 user seats", active: true },
      { feature: "25 workspaces", active: true },
      { feature: "Single Sign-On (SSO)", active: false },
      { feature: "Two-factor authentication", active: false },
      { feature: "Caching and pre-aggregation", active: false },
    ],
    isEnterprise: false,
    isRecommended: true,
    buttonText: "Get started",
    buttonLink: "#",
  },
  {
    name: "Enterprise",
    price: "$190",
    description: "For custom needs",
    features: [
      { feature: "Unlimited user seats", active: true },
      { feature: "Unlimited workspaces", active: true },
      { feature: "Single Sign-On (SSO)", active: true },
      { feature: "Two-factor authentication", active: true },
      { feature: "Caching and pre-aggregation", active: true },
    ],
    isEnterprise: true,
    isRecommended: false,
    buttonText: "Contact sales",
    buttonLink: "#",
  },
]

export function Pricing() {
  return (
    <section
      aria-labelledby="solar-analytics"
      className="relative mx-auto w-full max-w-6xl overflow-hidden"
    >
      <div>
        <h2
          id="solar-analytics"
          className="relative scroll-my-24 text-lg font-semibold tracking-tight text-[#27ae5f]"
        >
          Pricing
          <div className="absolute top-1 -left-[8px] h-5 w-[3px] rounded-r-sm bg-[#27ae5f]" />
        </h2>
        <p className="mt-2 max-w-lg text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl">
          Simple No-Tricks Pricing
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {plans.map((plan, planIdx) => (
          <div
            key={planIdx}
            className="relative rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800"
          >
            {plan.isRecommended && (
              <div className="flex justify-center">
                <span className="absolute top-0 -translate-y-1/2 rounded-full bg-[#27ae5f] px-3 py-1 text-sm font-medium text-white">
                  Recommended
                </span>
              </div>
            )}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              {plan.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {plan.description}
            </p>
            <p className="mt-6 flex items-baseline">
              <span className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                {plan.price}
              </span>
              <span className="ml-1 text-gray-600 dark:text-gray-300">/mo</span>
            </p>
            {/* Divider */}
            <hr className="my-4 border-gray-200 dark:border-gray-700" />
            {/* Features List */}
            <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
              {plan.features.map((feature, featureIdx) => (
                <li key={featureIdx} className="flex items-center space-x-2">
                  {feature.active ? (
                    <CheckCircle
                      className="h-5 w-5 flex-shrink-0 text-green-500"
                      aria-hidden="true"
                    />
                  ) : (
                    <XCircle
                      className="h-5 w-5 flex-shrink-0 text-red-500"
                      aria-hidden="true"
                    />
                  )}
                  <span>{feature.feature}</span>
                </li>
              ))}
            </ul>
            {/* Button */}
            {plan.isEnterprise ? (
              <a
                href={plan.buttonLink}
                className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
              >
                {plan.buttonText}
              </a>
            ) : (
              <a
                href={plan.buttonLink}
                className="mt-8 inline-flex w-full items-center justify-center rounded-md bg-[#27ae5f] px-4 py-2 font-medium text-white hover:bg-blue-700"
              >
                {plan.buttonText}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
