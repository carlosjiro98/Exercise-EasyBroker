import { render, screen } from '@testing-library/react';
import App from './App';
import Nav from './components/Nav';

test('renders web title', () => {
  render(<Nav />);
  expect(screen.getByText(/YouProperties/i)).toBeInTheDocument();
});
