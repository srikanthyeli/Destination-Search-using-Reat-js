// Write your code here
import './index.css'

const DestinationItem = props => {
  const {placeDetails} = props
  const {name, imgUrl} = placeDetails

  return (
    <li className="place-card-container">
      <img src={imgUrl} alt={name} className="place-img" />
      <h1 className="heading">{name}</h1>
    </li>
  )
}

export default DestinationItem
