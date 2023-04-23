import React from 'react';
import { render, screen } from '@testing-library/react';
import UserDetail from '@app/pages/users/UserDetail';

test('Render component UserDetail successfully', () => {
  render(<UserDetail />);

  const element = screen.getByText(/This is information of/i);

  expect(element).toBeInTheDocument();
});
