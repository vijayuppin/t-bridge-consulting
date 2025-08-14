export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <main className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to T-Bridge Consulting
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Professional consulting services for your business needs
        </p>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Next.js App Ready
          </h2>
          <p className="text-gray-600">
            This is a minimal Next.js application scaffold built for Firebase App Hosting.
          </p>
        </div>
      </main>
    </div>
  )
}
