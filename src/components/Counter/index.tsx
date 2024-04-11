import { useState } from 'react'
import { CounterContainer } from './styles'

import { FaMinus, FaPlus } from 'react-icons/fa'

export function Counter() {
  const [count, setCount] = useState<number>(0)

  const increment = (): void => {
    setCount(count + 1)
  }

  const decrement = (): void => {
    setCount(count - 1 < 0 ? 0 : count - 1)
  }
  return (
    <CounterContainer>
      <button onClick={decrement}>
        <FaMinus color="#8047F8" />
      </button>
      <span> {count} </span>
      <button onClick={increment}>
        <FaPlus color="#8047F8" />
      </button>
    </CounterContainer>
  )
}
