import "../src/styles/globals.css"
import React from 'react'
import { RouterContext } from "next/dist/next-server/lib/router-context";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <RouterContext.Provider value={{
      push: () => Promise.resolve(),
      replace: () => Promise.resolve(),
      prefetch: () => Promise.resolve()
    }}>
      <Story />
    </RouterContext.Provider>
  ),
]