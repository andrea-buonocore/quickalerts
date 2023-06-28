import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import SavedArticles from "./components/SavedArticles";
import { Provider } from "react-redux";
import store from "./redux/store"
import Settings from "./components/Settings";
import Welcome from "./components/Welcome";


function App() {
  return (
    <Provider store={store}>
      <div id="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/saved" element={<SavedArticles />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/home" element={<MainContainer />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
