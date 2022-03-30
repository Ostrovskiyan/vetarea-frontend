import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header/Header';
import Content from './content/Content';
import LoginPage from './login/LoginPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
