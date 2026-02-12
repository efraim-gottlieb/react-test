function Filter(props) {
  const {data, setData} = props

  return (
    <div>
      <button onClick={() => setData(data.filter(ter=>ter.status == 'active'))}>active</button>
      <button onClick={() => setData(data.filter(ter=>ter.status == 'quiet'))}>quiet</button>
      <button onClick={() => setData(data.filter(ter=>ter.status == 'dead'))}>dead</button>
      <button onClick={() => setData(data.filter(ter=>ter.status == 'agent'))}>Israeli Agent</button>
    </div>
  )
}

export default Filter
