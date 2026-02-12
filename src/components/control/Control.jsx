// import './control.css'
import SearchBar from '../searchBar/SearchBar'
import Filter from '../filter/Filter'
function Control({data,setData, terrorists}) {
  return (
    <>
    <div className='control'>
      <SearchBar data = {data} setData = {setData} terrorists={terrorists}></SearchBar>
    </div>
    <div>
      <Filter data={data} setData={setData} terrorists={terrorists}></Filter>
    </div>
    </>
  )
}

export default Control
