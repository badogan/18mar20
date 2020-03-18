import {useState} from 'react'

const useCounter = () =>{
    const [counter,setCounter] = useState(0)
    const up =() => setCounter(counter+1)
    const down = () => setCounter(counter-1)
    return {counter,up,down}
}

export default useCounter