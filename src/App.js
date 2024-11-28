import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import NavBar from "./components/NavBar/NavBar";
import CardList from "./components/CardList/CardList";

function App() {
  return (
    <>
      <NavBar />
      <LandingPage />
      <CardList />
    </>
  );
}

export default App;
