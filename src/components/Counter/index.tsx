import { CounterContainer } from './styles'
import { useState } from 'react'

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
      <button onClick={decrement}>--</button>
      <span> {count} </span>
      <button onClick={increment}>+</button>
    </CounterContainer>
  )
}
