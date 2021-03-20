import logo from './logo.svg';
import './App.css';


function RenderApp(){
  return (
    <div>
    <h5>Input Format</h5>
    <p>First line contains <i>N.N</i> follow,each having a Pan number</p>
    <div>
      <h5>Constraints</h5>
      <ul>
        <li>1 &#8804;<i>N</i>&#8804; 10 </li>
        <li>Each char is an uppercase letter i.e.,<b><i>char</i></b> &#8712;[<b><i>"A","Z"</i></b>]</li>
        <li>Each digit lies between 0 and 9, i.e.,<b><i>digit</i></b>&#8712;[<b>0,9</b>]</li>
        <li>The length of the PAN number is always 10, i.e.,<b><i>length(PAN)=10</i></b></li>
        <li>Every character in PAN is either char or digit satisfying the above constraints</li>
      </ul>
     </div>
     <div>
       <h5>Output Format</h5>
       <p>For every PAN number listed,print YES if it is valid and NO if it isnt.</p>
     </div>
  </div>
  )
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    <RenderApp/>
    </div>
  );
}

export default App;
