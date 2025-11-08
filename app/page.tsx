import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Welcome to Next.js on AWS Lambda! 🚀
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              This is a serverless Next.js application deployed on AWS Lambda
              using the Serverless Framework.
            </p>

            <div className="bg-blue-50 dark:bg-gray-700 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Features:
              </h2>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="mr-2">✅</span>
                  Next.js 15 with App Router
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✅</span>
                  TypeScript for type safety
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✅</span>
                  Tailwind CSS for styling
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✅</span>
                  Serverless Framework deployment
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✅</span>
                  AWS Lambda Function URL
                </li>
              </ul>
            </div>

            <div className="flex gap-4">
              <Link
                href="/about"
                className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Go to About Page →
              </Link>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
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
