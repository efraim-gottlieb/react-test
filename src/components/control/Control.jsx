import './control.css'
import SearchBar from '../searchBar/SearchBar'
import Filter from '../filter/Filter'
import Most from '../mostDanger/Most'
function Control({data,setData, terrorists}) {
  return (
    <>
    <div className='control'>

      <button onClick={()=>setData(terrorists)}>All</button>
    <div className='control'>
      <SearchBar data = {data} setData = {setData} terrorists={terrorists}></SearchBar>
    </div>
    <div>
      <Filter data={data} setData={setData} terrorists={terrorists}></Filter>
    </div>
    <div>
      <Most setData={setData} terrorists={terrorists}></Most>
    </div>
    </div>
    </>
  )
}

export default Control
