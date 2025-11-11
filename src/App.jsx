import data from "./assets/data.json";
import logo from "./img/logo.png";
import "./App.css";
// console.log(data);

function App() {
  return (
    <div>
      <header>
        <img src={logo} alt="Logo Netflix" />
      </header>

      <main>
        <section>
          <p>Emission TV</p>
          <div>
            <article>Img 1</article>
            <article>Img 2</article>
            <article>Img 3</article>
            <article>Img 4</article>
            <article>Img 5</article>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
