import { useState } from "react";
import "./App.css";
import Table from "./components/table/Table";
import { terrorists } from "../data/terrorists_data.js";
import Control from "./components/control/Control.jsx";
function App() {
  const [data, setData] = useState(terrorists);
  return (
  <>
  <Control setData={ setData} data={data} terrorists = {terrorists}/>
  <Table data={data}></Table>
  </>
  )
}

export default App;
