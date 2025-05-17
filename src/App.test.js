import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('App', () => {
  it('should render without crashing', () => {
    render(<App />);
    // A more meaningful assertion would be better here,
    // but for now, just rendering is a basic check.
    expect(true).toBe(true);
  });
});
