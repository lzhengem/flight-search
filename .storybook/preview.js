import { addDecorator } from "@storybook/react"
import React from "react"
import { Layout } from "./layout"

addDecorator((storyFn) => <Layout>{storyFn()}</Layout>)
