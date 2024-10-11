import Login from "./Pages/Login";
import Regetar from "./Pages/regestar";
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 



export default function App() {
  return (
  <>

 <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path='/regester' element={<Regetar/>}/>
    </Routes>
  </BrowserRouter>

  </>
  );
}
