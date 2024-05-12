import React from 'react';
import { render, screen } from '@testing-library/react';
import Trip from './Trip';

test('renders learn react link', () => {
  render(<Trip />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
