import './Grid.css'
import PropTypes from "prop-types";
import Tile from "./Tile.jsx";
import Item from "./Item.js";

Grid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.instanceOf(Item))
}

function Grid(props) {
  return (
    <div className="grid">
      {props.items.map((item) => {
        return <Tile key={item.kanji} text={item.kanji} background={item.imageFilename} />
      })}
    </div>
  )
}

export default Grid