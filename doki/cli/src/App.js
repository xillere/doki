import Home from "./pages/home"
import Dashboard from "./pages/dashboard"
import Onboarding from "./pages/onboarding"
import { BrowserRouter, Routes, Route} from 'react-router-dom' 

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/onboarding" element={<Onboarding/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
