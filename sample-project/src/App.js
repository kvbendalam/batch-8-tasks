import './App.css';
import Header from "./Header"
import Course from './Course'
import Counter from './Counter'
import Employee from './Employee'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeSalaryf from './EmployeeSalaryf';
import FetechInClass from './FetechInClass';
import FetchInFunction from './FetchInFunction';
import AxiosinClass from './AxiosinClass';
import AxiosInFunction from './AxiosInFunction';
import AxiosDemo from './AxiosDemo';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Header />}></Route>
          <Route exact path="/apiclass" element={<FetechInClass />} />
          <Route exact path="/apifunction" element={<FetchInFunction />} />
          <Route exact path="/axiosinc" element={<AxiosinClass />} />
          <Route exact path="/axiosinf" element={<AxiosInFunction />} />
          <Route exact path="/axios" element={<AxiosDemo />} />
          <Route exact path='/counter' element={< Counter />}></Route>
          <Route exact path='/emp' element={< Employee />}></Route>
          <Route exact path='/Course' element={<Course />}></Route>
          <Route exact path='/Employee/:id' element={<EmployeeSalaryf />}></Route>
        </Routes>
      </Router >

    </div >

  );
}

export default App;
