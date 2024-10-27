import './Tile.css'
import PropTypes from "prop-types";

Tile.propTypes = {
  text: PropTypes.string,
  background: PropTypes.string
}

function Tile(props) {
  return (
    <div className="tile">
      <img className="image" src={props.background} draggable="false" />
      <span className="text">{props.text}</span>
    </div>
  )
}

export default Tile