import { render, screen } from "@testing-library/react"
import App from "@/src/App" // make sure absolute path work

test("Should have title", () => {
  render(<App />)
  const linkElement = screen.getByText("Test")
  expect(linkElement).toBeInTheDocument()
})
