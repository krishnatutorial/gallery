// Write your code here.
import './index.css'

const ThumbNailItem = props => {
  const {thumbNailDetails, thumbNailClick, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = thumbNailDetails
  const thumbnailClassName = isActive ? `thumbnail active` : `thumbnail`

  const imageButton = () => {
    thumbNailClick(id)
  }

  return (
    <li className="container">
      <button type="button" onClick={imageButton}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}
export default ThumbNailItem
