import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NACIONALNI PROIZVODI - BOSNA I HERCEGOVINA', () => {
  render(<App />);
  const linkElement = screen.getByText(/NACIONALNI PROIZVODI - BOSNA I HERCEGOVINA/i);
  expect(linkElement).toBeInTheDocument();
});
