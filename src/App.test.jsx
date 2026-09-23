import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the Vite + React heading', () => {
  render(<App />)
  expect(screen.getByText(/Get started/i)).toBeInTheDocument()
})