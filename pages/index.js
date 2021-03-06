import { getSession } from 'next-auth/client'
import Head from 'next/head'
import Header from '../components/Header'
// import Login from '../components/Login'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'
export default function Home({ session }) {
  // if(!session) return <Login />
  return (
    <div className='h-screen bg-gray-100 overflow-hidden'>
      <Head>
        <title>Facebook</title>
      </Head>

{/* header */}
<Header />

<main className='flex'>
  {/* sidebar */}
  <Sidebar />
  {/* feed */}
<Feed />
  {/* widgets */}
  <Widgets / >
</main>

    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  // const post = await db.collection('posts').orderBy('timestamp', 'desc').get();

  // const docs = posts.docs.map(post => ({
  //   id: post.id,
  //   ...post.data(),
  // }))
  return {
    props: {
      session
    }
  }
}