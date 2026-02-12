import './control.css'
import SearchBar from '../searchBar/SearchBar'
import Filter from '../filter/Filter'
import Most from '../mostDanger/Most'
function Control({data,setData, terrorists}) {
  return (
    <div className='control'>
      <button onClick={()=>setData(terrorists)}>All</button>
      <Most setData={setData} terrorists={terrorists}></Most>
    <div className=''>
      <SearchBar data = {data} setData = {setData} terrorists={terrorists}></SearchBar>
    </div>
    <div>
      <Filter data={data} setData={setData} terrorists={terrorists}></Filter>
    </div>
    <div>
    </div>
    </div>
  )
}

export default Control
