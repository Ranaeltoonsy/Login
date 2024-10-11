// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Regetar from './login page/regestar'
export default function App() {
  return (
    <div className=' shadow-box   px-0 col-12 wed'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/register" element={<Regetar />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

