import { useState } from "react";
function SearchBar(props) {
  const {data, setData, terrorists} = props

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
  function all(){
    setData(terrorists)
  }
  return (
    <div>
      <div>
        <label htmlFor="by-name">search by name</label>
        <input name="name" onChange={handelChange} type="text" className="by-name" id="by-name" />
        <button onClick={byName}>search</button>
      </div>
      <div>

        <label htmlFor="by-attacks">search by attacks</label>
        <input name="attacks" onChange={handelChange} type="text" className="by-attacks" id="by-attacks" />
        <button onClick={byAttacks}>search</button>
      </div>
      <button onClick={all}>All</button>
    </div>
  );
}

export default SearchBar;
