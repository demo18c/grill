import useStore from '@/helpers/store'
import dynamic from 'next/dynamic'
import BackButton from '@/components/dom/back'
import Navy from '@/components/dom/nav'

const Box = dynamic(() => import('@/components/canvas/Box'), {
  ssr: false,
})

const Page = () => {
  useStore.setState({ title: 'Box' })
  return (
    <>
      <Box r3f />
      {/* <BackButton /> */}
      <Navy />
    </>
  )
}

export default Page
