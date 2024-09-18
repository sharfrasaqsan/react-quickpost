import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import NewPost from "./Components/NewPost";
import About from "./Components/About";
import Error from "./Components/Error";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import EditPost from "./Components/EditPost";
import PostPage from "./Components/PostPage";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post">
              <Route index element={<NewPost />} />
              <Route path=":id" element={<PostPage />} />
            </Route>
            <Route path="/edit/:id" element={<EditPost />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
