// src/App.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders Navbar', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const navbarElement = screen.getByRole('navigation');
  expect(navbarElement).toBeInTheDocument();
});

test('renders Feed component', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const feedElement = screen.getByTestId('feed');
  expect(feedElement).toBeInTheDocument();
});
