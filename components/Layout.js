import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children, home }) {
  return (
    <div className="max-w-xl mx-auto py-8">
      <Head>
        <title>Arnav&apos;s Running Log</title>
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