import {BrowserRouter as Router , Route, Routes} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";

import {Navbar , ExercisesList , EditExercises , CreateExercise , CreateUser} from "./components"

function App() {
  
  return (
    <Router>
      <Navbar/>
      <br />
      <Routes>
        <Route path="/" exact element={<ExercisesList />}/>
        <Route path="/edit/:id" element={<EditExercises />}/>
        <Route path="/create" element={<CreateExercise />}/>
        <Route path="/user" element={<CreateUser />}/>
      </Routes>
    </Router>
  );
}

export default App;
