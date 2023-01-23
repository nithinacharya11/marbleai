import './App.css';
import { Route, Routes} from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Account from './pages/Account';
import Signin from './pages/Signin';
import { AuthContextProvider } from './context/AuthContext';
import Protected from './components/Protected';

function App() {

  return (
    <div className="App">
      <AuthContextProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route 
            path='/account' 
            element={
            <Protected>
              <Account/>
            </Protected>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  )
}

export default App
