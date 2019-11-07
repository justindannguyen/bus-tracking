import React from 'react'
import PropTypes from 'prop-types'
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Tooltip from "react-bootstrap/Tooltip"

function renderTooltip(props) {
  console.log(props)
  return
}

function CarMarker(props) {
  return (
    <div>
      <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 400 }}
        overlay={
          <Tooltip {...props}>Simple tooltip: {props.lat} {props.lng} </Tooltip>
        }
      >
        <span className="fa fa-car" style={{ color: 'blue', fontSize: 20 }} />
      </OverlayTrigger>
    </div >
  )
}

CarMarker.propTypes = {

}

export default CarMarker