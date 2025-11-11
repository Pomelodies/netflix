import data from "./assets/data.json";
import logo from "./img/logo.png";
import "./App.css";
// console.log(data);
import Section from "./components/Section";

function App() {
  return (
    <div>
      <header>
        <img src={logo} alt="Logo Netflix" />
      </header>
      <main>
        {data.map((element) => {
          // return console.log(element.category);
          return <Section category={element.category} />;
        })}
      </main>
    </div>
  );
}

export default App;
