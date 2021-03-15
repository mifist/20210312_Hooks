import {render, screen, fireEvent} from '@testing-library/react'
import Counter2 from '../Counter2'

afterEach(() => {
    localStorage.removeItem('count')
})


test('should render 0', () => {
    render(<Counter2 />)
    const cnt = screen.getByTestId('cnt')
    expect(cnt.textContent).toBe('0')
   })

test('should recieve data from localStorage', () => {
    localStorage.setItem('count', '10')
    render(<Counter2 />)

    const cnt = screen.getByTestId('cnt')
    const btn = screen.getByText(/increment/i)
    fireEvent.click(btn)

    const newCount  =  localStorage.getItem('count')
    expect(cnt.textContent).toBe(newCount)
})

test('should render 0 after localStorage', () => {
    render(<Counter2 />)
    const cnt = screen.getByTestId('cnt')
    expect(cnt.textContent).toBe('0')
   })

