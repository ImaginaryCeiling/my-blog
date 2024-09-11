import Link from 'next/link'

export default function PostList({ posts }) {
  return (
    <ul className="space-y-4">
      {posts.map(({ id, date, title }) => (
        <li key={id}>
          <Link href={`/posts/${id}`} className="text-xl text-blue-500 hover:underline">
            {title}
          </Link>
          <br />
          <small className="text-gray-500">{date}</small>
        </li>
      ))}
    </ul>
  )
}