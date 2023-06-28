import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import SavedArticles from "./components/SavedArticles";
import Category from "./components/Category";
import Lang from "./components/Lang";
import { Provider } from "react-redux";
import store from "./redux/store"


function App() {
  return (
    <Provider store={store}>
      <div id="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="/saved" element={<SavedArticles />} />
            <Route path="/category" element={<Category />} />
            <Route path="/lang" element={<Lang />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
