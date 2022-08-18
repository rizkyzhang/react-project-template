import { render, screen } from "@testing-library/react"
import App from "@/App" // make sure absolute path work

test("Should have title", () => {
  render(<App />)
  const linkElement = screen.getByText("React template")
  expect(linkElement).toBeInTheDocument()
})
