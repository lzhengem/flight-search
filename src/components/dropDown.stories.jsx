import React from "react"
import { DropDown as DropDownImport } from "./dropDown"

export default { title: "Components" }

const options = ["a", "b", "c"]
export const DropDown = () => {
  return <DropDownImport options={options} />
}
