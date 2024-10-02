import Head from 'next/head'
import ProfileCardInfo from '../components/ProfileCardInfo'
import HomeSection from '../components/HomeSection'

export default function Home() {
  return (
    <div className='bg-[#121212] py-16'>
      <Head>
        <title>Rohit s Protfolio</title>
        <meta name='description' content='Generated by create next app' />
      </Head>
      <div className=' flex lg:flex-row md:flex-col md:px-16 flex-col gap-10 justify-center'>
        <ProfileCardInfo />
        <HomeSection />
      </div>
    </div>
  )
}
