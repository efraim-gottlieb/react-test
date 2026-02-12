import { useState } from "react";
import './searchBar.css'
function SearchBar(props) {
  const {setData, terrorists} = props

  const [search, setSearch] = useState({name:'', attacks: ""});
    function handelChange(e) {
    const { name, value } = e.target;
    setSearch((prev) => ({ ...prev, [name]: value }));
    console.log(search);
  }
  function byName(){
    setData(terrorists.filter(ter => ter.name.toLowerCase().includes(search.name.toLocaleLowerCase())))
  }
  function byAttacks(){
    setData(terrorists.filter(ter => ter.attacksCount==search.attacks))
  }
  return (
    <div className="search-bar">
      <p>Search By:</p>
      <div>
        <label htmlFor="by-name">Name</label>
        <input name="name" onChange={handelChange} type="text" className="by-name" id="by-name" />
        <button onClick={byName}>Search</button>
      </div>
      <div>

        <label htmlFor="by-attacks">Attacks</label>
        <input name="attacks" onChange={handelChange} type="text" className="by-attacks" id="by-attacks" />
        <button onClick={byAttacks}>Search</button>
      </div>

    </div>
  );
}

export default SearchBar;
