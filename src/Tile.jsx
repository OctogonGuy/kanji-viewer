import './Tile.css'
import PropTypes from "prop-types";

Tile.propTypes = {
  text: PropTypes.string,
  reading: PropTypes.string,
  wikipediaArticle: PropTypes.string,
  background: PropTypes.string
}

function Tile(props) {
  return (
    <a className="tile" href={props.wikipediaArticle} target="_blank">
      <img className="image" src={props.background} draggable="false" />
      <span className="text"><ruby>
        {props.text}
        <rp>(</rp>
        <rt className="reading">{props.reading}</rt>
        <rp>)</rp>
      </ruby></span>
    </a>
  )
}

export default Tile