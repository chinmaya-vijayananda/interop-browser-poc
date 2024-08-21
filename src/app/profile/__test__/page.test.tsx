import { render, screen } from '@testing-library/react'
import HomePage from '../page'

describe('Homepage', () => {
  it('Should render properly.', () => {
    render(<HomePage />)

    // getting the element form DOM
    const heading = screen.getByRole('heading', { name: /User Profile/i })

    // Check if footer is rendered
    expect(heading).toBeInTheDocument()
  })
})
