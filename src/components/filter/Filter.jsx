import './filter.css'
function Filter(props) {
  const {data, setData} = props

  return (
    <div className='filter-bar'>
            <p>Filter:</p>
      <button onClick={() => setData(data.filter(ter=>ter.status == 'active'))}>Active</button>
      <button onClick={() => setData(data.filter(ter=>ter.status == 'quiet'))}>Quiet</button>
      <button onClick={() => setData(data.filter(ter=>ter.status == 'dead'))}>Dead</button>
      <button onClick={() => setData(data.filter(ter=>ter.status == 'agent'))}>Israeli Agent</button>
    </div>
  )
}

export default Filter
