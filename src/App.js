import logo from './logo.svg';
import linkedInLogo from './linkedin.svg'
import githubLogo from './github.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Francisco Correia de Sousa</h1>
        <span>
          Hello! My name is Francisco. I am a Masters Computer Science 
          and Engineering student @ Instituto Superior Técnico.
        </span>
        <br></br>
        <br></br>
        <br></br>
        <div>
          <a href="https://www.linkedin.com/in/franciscomcsousa/" target="_blank">
            <img src={linkedInLogo} className="logo linkedin" alt="Linkedin logo" />
          </a>
          <a href="https://github.com/franciscomcsousa" target="_blank">
            <img src={githubLogo} className="logo github" alt="Github logo" />
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
