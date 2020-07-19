import React from "react"
import { DropDown as DropDownImport } from "./dropDown"
import { withKnobs, select } from "@storybook/addon-knobs"
import { action } from "@storybook/addon-actions"

export default { title: "Components", decorators: [withKnobs] }

const options = ["a", "b", "c"]
export const DropDown = () => {
  const width = select("width", ["largest", "large", "base"])
  const onChange = action("I've changed")
  return <DropDownImport options={options} width={width} onChange={onChange} />
}
