import { GetStaticProps } from 'next'
import Layout from '../components/Layout'
import PostList from '../components/PostList'
import { getSortedPostsData } from '../lib/posts'

interface PostData {
  id: string
  title: string
  date: string
  // Add any other properties your posts have
}

export default function Home({ allPostsData }: { allPostsData: PostData[] }) {
  return (
    <Layout home>
      <PostList posts={allPostsData} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}