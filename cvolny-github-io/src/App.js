import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ProfessionalSummary from "./pages/professional/Summary";
import TalksAndPublications from "./pages/professional/TalksAndPublications";
import Projects from "./pages/professional/Projects";
// import Career from "./pages/professional/Career";
import SocialSummary from "./pages/social/Summary";
// import Burning from "./pages/social/Burning";
// import Queer from "./pages/social/Queer";
import MusicSummary from "./pages/music/Summary";
// import Synthesizers from "./pages/music/Synthesizers";
// import Production from "./pages/music/Production";
// import Precussion from "./pages/music/Precussion";
import NoPage from "./pages/NoPage";


export default function App() {
  return (
    <HashRouter basename={`/${process.env.PUBLIC_URL}`}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/professional">
            <Route index element={<ProfessionalSummary />} />
            <Route path="talks_and_publications" element={<TalksAndPublications />} />
            <Route path="projects" element={<Projects />} />
          </Route>
          <Route path="/social" element={<SocialSummary />} />
          <Route path="/music" element={<MusicSummary />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
