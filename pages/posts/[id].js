import Layout from '../../components/Layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import styles from '../../styles/BlogPost.module.css'

export default function Post({ postData }) {
  console.log('Post Data:', postData);

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className={styles.blogpost}>
        <h1>{postData.title}</h1>
        <div>{postData.date}</div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}/>
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}