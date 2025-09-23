import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main page text', () => {
  render(<App />);
  const textElement = screen.getByText(/Hello from the React App!/i);
  expect(textElement).toBeInTheDocument();
});