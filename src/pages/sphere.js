import useStore from '@/helpers/store'
import dynamic from 'next/dynamic'
import Go from '@/components/dom/go'

const Sphere = dynamic(() => import('@/components/canvas/Sphere'), {
  ssr: false,
})
const Floor = dynamic(() => import('@/components/canvas/Floor'), {
  ssr: false,
})

const Page = ({ title }) => {
  useStore.setState({ title })
  return (
    <>
      <Sphere position={[0, 0, 0]} r3f />
      <Floor position={[0, 0, 0]} r3f />
      <Go />
    </>
  )
}

export default Page

// export async function getStaticProps() {
//   return {
//     props: {
//       title: 'Sphere',
//     },
//   }
// }
