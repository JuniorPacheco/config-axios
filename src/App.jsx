import { useEffect } from "react";
import "./App.css";
import { rickAndMortyAxios } from "./utils/configAxios";

function App() {
  //? 1. Instancia de Axios

  useEffect(() => {
    rickAndMortyAxios
      .get("/location/3")
      .then(({ data }) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    rickAndMortyAxios
      .get("/character/2")
      .then(({ data }) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  //? 2. Interceptores

  useEffect(() => {
    localStorage.setItem("JWT", "contrasena-segura");
  }, []);

  return (
    <main>
      <h2>Axios</h2>
    </main>
  );
}

export default App;
