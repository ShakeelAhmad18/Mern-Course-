import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Users from "./users/pages/Users";
import PageNotFound from "./users/PageNotFound";

function App() {
  return (
    <Router>
      <Routes>
       <Route exact path="/" element={<Users/>}/>
       <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
