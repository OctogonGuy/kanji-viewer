import './Tile.css'
import PropTypes from "prop-types";

Tile.propTypes = {
  text: PropTypes.string,
  reading: PropTypes.string,
  background: PropTypes.string
}

function Tile(props) {
  return (
    <div className="tile">
      <img className="image" src={props.background} draggable="false" />
      <span className="text"><ruby>
        {props.text}
        <rp>(</rp>
        <rt className="reading">{props.reading}</rt>
        <rp>)</rp>
      </ruby></span>
    </div>
  )
}

export default Tile