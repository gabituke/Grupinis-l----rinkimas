import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import AllStories from './pages/AllStories'
import SingleStory from './pages/SingleStory'
import NewStory from './pages/NewStory'


import MainContext from './pages/components/MainContext'
import Header from './pages/components/Header'
import Alert from './pages/components/Alert'
import './App.css';

const App = () => {

  const [alert, setAlert] = useState({
    message: '',
    status: ''
  })

  const contextValues = { alert, setAlert }

  return (
    <BrowserRouter>
      <MainContext.Provider value={contextValues}>
        <Header />
        <div className="container">
         
          <Routes>
           
           
            <Route path="/" element={<AllStories />} />
            
            <Route path="/:id" element={<SingleStory />} />
            
          </Routes>
        </div>
      </MainContext.Provider>
    </BrowserRouter>
  )
}

export default App