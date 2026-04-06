import { useEffect } from 'react';
import OtherComponent from './components/OtherComponent'
import { useCounterStore } from './stores/store'

function App() {
  const count = useCounterStore((state) => state.count)

  const loadCount = useCounterStore((state) => state.loadCount);

  useEffect(() => {
    loadCount();
  }, []);

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      {count === null
        ? <p>Loading...</p>
        : <OtherComponent count={count} />
      }    </div>
  )
}

export default App
