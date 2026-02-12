function Most(props) {
  const {  setData, terrorists } = props;
  const dangerous = terrorists.filter((ter) => {
    if (ter.status == "active" && ter.imageUrl) return ter;
  });

  let most  = dangerous[0]
  dangerous.forEach(ter=>{
    if (ter.attacksCount > most.attacksCount) {
      most = [ter]
    }
  })
  return (
    <div>
      <button onClick={() => setData(most)}>Most Dangerous Terrorist</button>
    </div>
  );
}

export default Most;
