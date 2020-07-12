import React from "react"
import { PropTypes } from "prop-types"

const LayoutContainer = ({ header, children, footer }) => {
  return (
    <div>
      <div>{header}</div>
      <div className="p-3">{children}</div>
      <div className="bottom-0 absolute w-full">{footer}</div>
    </div>
  )
}

LayoutContainer.propTypes = {
  header: PropTypes.node,
  children: PropTypes.node,
  footer: PropTypes.node
}
export { LayoutContainer }
