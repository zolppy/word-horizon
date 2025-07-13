import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Animals from "./pages/Animals";
import Bedroom from "./pages/Bedroom";
import Body from "./pages/Body";
import Clothes from "./pages/Clothes";
import Emotions from "./pages/Emotions";
import Family from "./pages/Family";
import Kitchen from "./pages/Kitchen";
import School from "./pages/School";
import NotFound from "./pages/NotFound";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { SidebarDesktop } from "./components/SidebarDesktop";
import { Section } from "./components/Section";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Sidebar />
        <SidebarDesktop />
        <main className="lg:ml-[300px] p-4 mt-20">
          <Section>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/animals" element={<Animals />} />
              <Route path="/bedroom" element={<Bedroom />} />
              <Route path="/body" element={<Body />} />
              <Route path="/clothes" element={<Clothes />} />
              <Route path="/emotions" element={<Emotions />} />
              <Route path="/family" element={<Family />} />
              <Route path="/kitchen" element={<Kitchen />} />
              <Route path="/school" element={<School />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Section>
        </main>
        <Footer />
      </Router>
    </>
  );
}

App.displayName = "App";
