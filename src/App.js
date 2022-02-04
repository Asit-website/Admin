import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

import SchoolAdmin from './Components/SchoolAdmin';


function App() {
  return (
   <>
   <Router>
    <SchoolAdmin/>
    </Router>
   </>
  );
}

export default App;
