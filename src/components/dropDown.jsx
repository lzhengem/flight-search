import React from "react"

const DropDown = ({ maxWidth, options, title }) => {
  return (
    <select>
      {options.map((option) => {
        return <option value={option}>{option}</option>
      })}
    </select>
  )
}

export { DropDown }
