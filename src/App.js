import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Form } from './components/Form';
import { Footer } from './components/Footer';
import { Projects } from './components/Projects';
import { Contactus } from './components/Contactus';


const App = () => {
    const [darkTheme, setdarkTheme] = useState("light");
    return (
        <Router>
            <div className=' body light '>
                <div className='flex  flex-wrap flex-col sm:justify-start  bg-gray-50 text-black  min-h-screen dark:bg-gray-950 dark:text-white'>
                    <Navbar darkTheme={darkTheme} setdarkTheme={setdarkTheme} />
                    <Routes>
                        <Route path='/projects' element={<Projects />}> </Route>
                        <Route path='/contactus' element={<Contactus />} ></Route>
                        <Route path='/' element={<Form />}></Route>
                    </Routes>
                    <Footer />
                </div>
            </div>
        </Router>
    )
}

export default App;