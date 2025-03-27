import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import PostWrite from "./pages/PostWrite";
import PostList from "./components/PostLIst";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<PostList/>}/>
          <Route path="/write" element={<PostWrite/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
