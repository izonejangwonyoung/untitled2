import './App.css';
import Hello from "./component/hello";
import Counter from "./component/Counter";
import Header from "./component/Header";
import DayList from "./db/DayList";
import Day from "./db/Day";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import EmptyPage from './component/EmptyPage';
function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<DayList/>} />
                    <Route path="/day/:day" element={<Day/>} />
                    <Route path="*" element={<EmptyPage/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
