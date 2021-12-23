import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="background-purple">
        <div className="background-second">
          <div className="background-third">
            <h1>Dictionary App</h1>
            <Dictionary />
            <p>
              <strong>
                Coded by Angela Yuri and{" "}
                <a href="https://github.com/an-yr/react-dictionary-app">
                  open-sourced
                </a>
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
