import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import UserList from '.././app/pages/users/UserList';

test('Render component UserList successfully', () => {
  render(<UserList />);
  const element = screen.getByText(/List User/i);
  expect(element).toBeInTheDocument();
});
