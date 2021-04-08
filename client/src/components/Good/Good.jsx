const Good = ({good}) => {

  console.log(good, "GOOd")

  return (
    <div>
      <img src={good.photo} alt="good" width="200"/>
      <h4>{good.name}</h4>
      <p>{good.description}</p>
      <p>{good.price}$</p>
    </div>
  )
}

export default Good
