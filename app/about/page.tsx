import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              📖 About This Project
            </h1>
            <div className="prose dark:prose-invert max-w-none mb-8">
              <h2 className="text-2xl font-semibold mb-4">Architecture</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                This is a modern Next.js application deployed to AWS using SST
                (Ion), providing a professional serverless infrastructure with:
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                <li>
                  🌐 <strong>CloudFront CDN:</strong> Global content delivery
                  for fast load times
                </li>
                <li>
                  ⚡ <strong>Lambda@Edge:</strong> Server-side rendering at the
                  edge
                </li>
                <li>
                  🪣 <strong>S3 Bucket:</strong> Static assets hosting
                </li>
                <li>
                  🔒 <strong>AWS IAM:</strong> Secure resource access
                </li>
                <li>
                  📊 <strong>CloudWatch:</strong> Monitoring and logging
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Frontend</h3>
                  <ul className="text-sm text-gray-600 dark:text-gray-300">
                    <li>Next.js 16</li>
                    <li>React 19</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS 4</li>
                  </ul>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Infrastructure</h3>
                  <ul className="text-sm text-gray-600 dark:text-gray-300">
                    <li>SST (Ion)</li>
                    <li>AWS Lambda</li>
                    <li>CloudFront</li>
                    <li>S3</li>
                  </ul>
                </div>
              </div>
            </div>
            <Link
              href="/"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors shadow-lg"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
