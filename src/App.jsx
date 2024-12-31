import {Route, Routes} from "react-router-dom";
import Jobs from "./pages/Jobs.jsx";
import Statistics from "./pages/Statistics.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Jobs/>}/>
            <Route path="/statistics" element={<Statistics/>}/>
        </Routes>
    )
}

export default App