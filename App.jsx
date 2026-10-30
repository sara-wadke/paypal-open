import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";

export default function App() {
  return (
    <div className="page">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}
