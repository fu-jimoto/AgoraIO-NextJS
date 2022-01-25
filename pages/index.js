import dynamic from 'next/dynamic'
const DynamicComponent = dynamic(() =>
  import('../components/VideoComponent').then((mod) => mod.VideoComponent), { ssr: false }
)

export default function Home() {
  return (
    <div>
      <DynamicComponent />
    </div>
  )
}
