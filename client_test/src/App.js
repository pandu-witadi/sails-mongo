//
//
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'

import TestPage from './page/TestPage'


const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TestPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
