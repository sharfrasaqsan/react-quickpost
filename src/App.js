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
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([
    [
      {
        id: 1,
        title: "Tech Company Unveils New AI-Powered Smartphone",
        datetime: "2024-09-13 10:45:00",
        body: "A leading tech company has launched its latest AI-powered smartphone, promising enhanced user experience and advanced features, including facial recognition and 5G connectivity.",
      },
      {
        id: 2,
        title: "Global Markets Surge Amid Economic Recovery Hopes",
        datetime: "2024-09-12 14:30:00",
        body: "Global stock markets surged today as investors showed confidence in the post-pandemic economic recovery. Major indices in the US, Europe, and Asia experienced significant gains.",
      },
      {
        id: 3,
        title: "Scientists Discover New Exoplanet in Habitable Zone",
        datetime: "2024-09-13 09:00:00",
        body: "Astronomers have discovered a new exoplanet located within the habitable zone of a distant star. The planet shows potential for liquid water, sparking excitement in the search for extraterrestrial life.",
      },
      {
        id: 4,
        title: "Olympic Committee Announces New Sports for 2028 Games",
        datetime: "2024-09-11 17:15:00",
        body: "The International Olympic Committee has announced the inclusion of four new sports for the 2028 Summer Games, including skateboarding, surfing, sport climbing, and breakdancing.",
      },
      {
        id: 5,
        title: "Wildfire Threatens Thousands in Southern California",
        datetime: "2024-09-12 12:00:00",
        body: "A rapidly spreading wildfire in Southern California has forced thousands of residents to evacuate. Firefighters are battling the blaze amid extreme weather conditions.",
      },
      {
        id: 6,
        title: "Breakthrough in Cancer Research Offers New Hope",
        datetime: "2024-09-10 08:30:00",
        body: "Researchers have made a significant breakthrough in cancer treatment, developing a new drug that targets tumors more effectively and with fewer side effects, offering hope for millions of patients worldwide.",
      },
      {
        id: 7,
        title: "International Space Station Celebrates 25 Years in Orbit",
        datetime: "2024-09-13 07:20:00",
        body: "The International Space Station celebrates 25 years of continuous operation today. Astronauts on board marked the occasion with special experiments and a live broadcast from space.",
      },
      {
        id: 8,
        title: "Major Cyberattack Disrupts Global Financial Networks",
        datetime: "2024-09-11 11:00:00",
        body: "A coordinated cyberattack on global financial institutions has caused widespread disruptions. Governments and private companies are working together to restore services and investigate the source of the attack.",
      },
      {
        id: 9,
        title: "UN Climate Summit Kicks Off Amid Rising Global Temperatures",
        datetime: "2024-09-12 16:45:00",
        body: "World leaders have gathered for the annual UN Climate Summit, with discussions focused on the urgent need for action as global temperatures continue to rise at an alarming rate.",
      },
      {
        id: 10,
        title: "Breakthrough in Renewable Energy Storage Technology",
        datetime: "2024-09-10 13:15:00",
        body: "A team of engineers has developed a new method for storing renewable energy more efficiently, potentially revolutionizing the way solar and wind energy are harnessed and used.",
      },
    ],
  ]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<NewPost />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
