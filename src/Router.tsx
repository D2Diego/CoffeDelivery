import { Route, Routes } from 'react-router-dom'
import { Checkout } from './pages/Checkout'
import { Success } from './pages/Success'

import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/sucess" element={<Success />} />
      </Route>
    </Routes>
  )
}
