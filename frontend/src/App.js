import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import NewPost from "./components/Blog/newPost";

function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
              <Route path="/post/new" element={<NewPost />} />
            <Route path="*" element={<Home />}  />
          </Routes>
        </div>
      </Router>
  );
}

export default App;