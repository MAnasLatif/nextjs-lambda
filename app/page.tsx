import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              🚀 Next.js on AWS Lambda
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Professional serverless deployment with SST (Ion)
            </p>
            <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Features:
              </h2>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>✅ Next.js 16 with App Router</li>
                <li>✅ TypeScript for type safety</li>
                <li>✅ Tailwind CSS 4 for styling</li>
                <li>✅ SST (Ion) for AWS deployment</li>
                <li>✅ CloudFront CDN distribution</li>
                <li>✅ Lambda@Edge for dynamic routes</li>
              </ul>
            </div>
            <div className="flex gap-4">
              <Link
                href="/about"
                className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors shadow-lg"
              >
                Learn More →
              </Link>
              <a
                href="https://github.com/MAnasLatif/nextjs-lambda"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-semibold px-8 py-3 rounded-lg transition-colors shadow-lg"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
