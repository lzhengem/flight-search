import React from "react"

const DropDown = ({ width = "base", options, name }) => {
  let widthCss
  switch (width) {
    case "largest": {
      widthCss = "w-64"
      break
    }
    case "large": {
      widthCss = "w-48"
      break
    }
    case "base": {
      widthCss = "w-32"
      break
    }
    default:
      widthCss = "w-32"
  }
  return (
    <select className={`${widthCss} border border-gray-500 rounded`}>
      {options.map((option) => {
        return (
          <option name={name} value={option}>
            {option}
          </option>
        )
      })}
    </select>
  )
}

export { DropDown }
