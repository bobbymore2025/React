import logo from './logo.svg';
import './App.css';
import List from "./components/list";
import Head from "./components/head";
function App() {
  const heading =["Mobile Operating System","Mobile Manufacturers"];
  const items1=["Android","Blackberry","IPhone","windows Phone"];
  const items2=["Samsung","HTC","Apple","Micromax"]
  return (
    <div className="App">
    
    <Head head={heading[0]} />
    <ul>
    { items1.map((e)=>(<List item={e}/>))}
    </ul>

    <Head head={heading[1]} />
    <ul>
    { items2.map((e)=>(<List item={e}/>))}
    </ul>

    </div>
  );
}

export default App;
