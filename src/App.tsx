import OtherComponent from './components/OtherComponent'
import { useCounterStore } from './stores/store'

function App() {
  const count = useCounterStore((state) => state.count)

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <OtherComponent count={count} />
    </div>
  )
}

export default App
