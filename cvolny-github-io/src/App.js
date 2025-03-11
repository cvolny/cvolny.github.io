import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import Home from "./pages/Home";
import Summary from "./pages/professional/Summary";
import TalksAndProjects from "./pages/professional/TalksAndProjects";
import Career from "./pages/professional/Career";
import Social from "./pages/Social";
import Music from "./pages/Music";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/professional">
            <Route index element={<Summary />} />
            <Route path="talks_and_projects" element={<TalksAndProjects />} />
            <Route path="career" element={<Career />} />
          </Route>
          <Route path="/social" element={<Social />} />
          <Route path="/music" element={<Music />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
