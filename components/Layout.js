import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children, home }) {
  return (
    <div className="max-w-xl mx-auto py-8">
      <Head>
        <title>Arnav&apos;s Running Log</title>
        <script defer src="https://unpkg.com/@tinybirdco/flock.js" data-host="https://api.us-east.aws.tinybird.co" data-token="p.eyJ1IjogIjAzYWE4N2M0LTFmNGEtNDgxYy1iZWQ4LTlmZDEzYTc1Y2RhMiIsICJpZCI6ICI0YWQ3ZWZjNS0yYmQ4LTQ1NjEtODA4OC0wZDFjOTEwOWI5Y2MiLCAiaG9zdCI6ICJ1cy1lYXN0LWF3cyJ9.8yG-BmkiRSyT0PSPMZe-IzymLN-njHUeW1Av9HV5rXM"></script>
      </Head>
      <header className="mb-8">
        <h1 className="text-4xl font-bold">Arnav Chauhan&apos;s Running Log</h1>
      </header>
      <main>{children}</main>
      {!home && (
        <div className="mt-8">
          <Link href="/" className="text-blue-500 hover:underline">
            ← Back to home
          </Link>
        </div>
      )}
    </div>
  )
}