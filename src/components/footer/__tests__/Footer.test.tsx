import Footer from '../Footer'
import { render, screen } from '@testing-library/react'

describe('Footer', () => {
  it('Should render properly.', () => {
    render(<Footer />)

    // getting DOM element to test
    const footer = screen.getByRole('contentinfo')
    const footerText = 'Version: 1.0.0'

    // Check if footer is rendered
    expect(footer).toBeInTheDocument()
    // Check if footer have the correct footer text
    expect(footer).toHaveTextContent(footerText)
  })
})
