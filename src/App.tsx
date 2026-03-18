import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Landing from './pages/Landing/Landing'
import Links from './pages/Links/Links'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/links" element={<Links />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App