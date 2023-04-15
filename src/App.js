import logo from './logo.svg';
import './App.css';
import Editor from "./editor/index.tsx";

function App() {
  return (
    <div>
      <Editor
        defaultValue="Hello world!"
      />
    </div>
  );
}

export default App;
