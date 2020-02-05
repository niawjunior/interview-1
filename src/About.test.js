import React from 'react';
import { render, cleanup } from '@testing-library/react';
import About from './About';

afterEach(cleanup)


describe('getByText', () => {
  it('should render `About Page`', () => {
    const { getByText } = render(<About />)
    getByText('About Page')
  })
})