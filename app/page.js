import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Connect from '@/components/Home/Connect/Connect'
import GetInTouch from '@/components/Home/GetInTouch/GetInTouch'
import MyEOGroups from '@/components/Home/MyEOGroups/MyEOGroups'
import Welcome from '@/components/Home/Welcome/Welcome'
import WhyJoinEO from '@/components/Home/WhyJoinEO/WhyJoinEO'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className="h-[100vh] bg-[url('/home/banner01.png')] bg-cover bg-center text-white flex flex-col mb-3">
        <Header />
        <div className="my-auto">
          <div className="max-w-screen-xl mx-auto p-5 flex flex-col gap-5 items-start">
            <h4 className="w-1/2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard
            </h4>
            <h1 className="text-5xl font-semibold">
              We Are EO <br /> Bengaluru
            </h1>
            <button className="bg-[#4257E1] px-6 py-3">Learn more</button>
          </div>
        </div>
      </div>
      <Welcome />
      <WhyJoinEO />
      <Connect />
      <MyEOGroups />
      <GetInTouch />
      <Footer />
    </>
  )
}
