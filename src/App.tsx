import {useState, useEffect, useRef} from "react";

const App = () => {

  const [ms, setMSeconds] = useState(0)
  const interval = useRef<number | null>(null)

  const startTimer = () => {
    interval.current = setInterval(() => {
      setMSeconds(seconds => seconds + 10)
    }, 10)
  }

  const stopTimer = () => {
    if (interval.current !== null) {
      clearInterval(interval.current)
    }
  }

  const clearTimer = () => {
    if (interval.current !== null) {
      stopTimer()
      setMSeconds(0)
    }
  }

  useEffect(() => {
    return () => {
      if (interval.current !== null) {
        clearInterval(interval.current)
      }
    }
  }, [])

  const milliseconds = ms % 1000
  const seconds = Math.floor(ms / 1000)
  const minuts = Math.floor(seconds / 60)
  const hour = (minuts / 60)

  return <div className="flex flex-col gap-y-10 bg-black h-full w-full justify-center items-center">
    <div className=" text-red-600 text-9xl font-bold ">
      {String(hour).padStart(2, "0")}:
      {String(minuts).padStart(2, "0")}:
      {String(seconds).padStart(2, "0")}:
      {String(milliseconds).padStart(3, "0").replace('0', '')}
    </div>
    <div className="flex gap-x-5 ">
      <button onClick={startTimer} className="bg-red-500 text-white px-5 py-3 rounded-xl font-bold text-xl">START</button>
      <button onClick={stopTimer} className="bg-red-500 text-white px-5 py-3 rounded-xl font-bold text-xl">STOP</button>
      <button onClick={clearTimer} className="bg-red-500 text-white px-5 py-3 rounded-xl font-bold text-xl">CLEAR</button>
    </div>
  </div>;
};

export default App;



