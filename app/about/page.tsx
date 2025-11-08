import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About This Project 📚
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              This is a demonstration of deploying Next.js applications to AWS
              Lambda using the Serverless Framework.
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-purple-50 dark:bg-gray-700 rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                  🏗️ Architecture
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  This application uses Next.js in standalone mode, packaged and
                  deployed as an AWS Lambda function. The Serverless Framework
                  handles all the infrastructure provisioning automatically.
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-gray-700 rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                  🚀 Technology Stack
                </h2>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Next.js 15 - React framework with App Router</li>
                  <li>TypeScript - Type-safe JavaScript</li>
                  <li>Tailwind CSS - Utility-first CSS framework</li>
                  <li>Serverless Framework - Infrastructure as Code</li>
                  <li>AWS Lambda - Serverless compute platform</li>
                </ul>
              </div>

              <div className="bg-purple-50 dark:bg-gray-700 rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                  💡 Benefits
                </h2>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Pay only for what you use - no idle server costs</li>
                  <li>Automatic scaling based on traffic</li>
                  <li>Built-in high availability and fault tolerance</li>
                  <li>Easy deployment and updates</li>
                  <li>No server management required</li>
                </ul>
              </div>
            </div>

            <Link
              href="/"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
