import PropTypes from "prop-types";
import './Button.css'

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  imageFilename: PropTypes.string,
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
}

function Button(props) {
  return (
    <div className={"button " + props.className} style={{ backgroundColor: props.backgroundColor }} onClick={props.onClick}>
      { props.imageFilename && <img className="image" src={props.imageFilename} draggable="false" /> }
      <span className="text">{props.text}</span>
    </div>
  )
}

export default Button