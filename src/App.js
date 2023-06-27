import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import Article from "./components/Article";

function App() {
  return (
    <div id="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/article" element={<Article />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
