import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import Article from "./components/Article";
import SavedArticles from "./components/SavedArticles";
import Category from "./components/Category";
import Lang from "./components/Lang";

function App() {
  return (
    <div id="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/article/:url" element={<Article />} />
          <Route path="/saved" element={<SavedArticles />} />
          <Route path="/category" element={<Category />} />
          <Route path="/lang" element={<Lang />} />
          
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
