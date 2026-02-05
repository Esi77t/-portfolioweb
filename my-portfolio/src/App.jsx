import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import Header from './components/Header';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project/:id" element={<ProjectDetail />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
