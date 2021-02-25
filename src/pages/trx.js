import useStore from '@/helpers/store'
import dynamic from 'next/dynamic'
// import Go from '@/components/dom/go'
import Navy from '@/components/dom/nav'

const Floor = dynamic(() => import('@/components/canvas/Floor'), {
  ssr: false,
})

const Trx = dynamic(() => import('@/components/canvas/TRX2RX'), {
  ssr: false,
})

const Page = ({ title }) => {
  useStore.setState({ title })
  return (
    <>
      {/* <Go /> */}
      <Floor r3f />
      <Navy />
      <Trx r3f />
    </>
  )
}

export default Page
