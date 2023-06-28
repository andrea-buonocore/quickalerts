import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import SavedArticles from "./components/SavedArticles";
import Lang from "./components/Lang";
import { Provider } from "react-redux";
import store from "./redux/store"
import Settings from "./components/Settings";


function App() {
  return (
    <Provider store={store}>
      <div id="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="/saved" element={<SavedArticles />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/lang" element={<Lang />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
