import { describe, it } from "vitest"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import App from "./App"

describe("App", () => {
  it("Renders the navBar", () => {
    // Arrange
    render(<App />)

    // Act

    // Expect
    const navItems = screen.getAllByRole("listitem")
    const navTitles = navItems.map((item) => item.textContent)
    expect(navTitles).toEqual(["Home", "New", "Popular", "Trending", "Categories"])
  })
})
