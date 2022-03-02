//I followed the example for spices and ran the same type of test. This was my first time creating a test,
//so I watched a few videos and read some articles, but focused on other parts of the project

import { render, screen } from '@testing-library/react';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
import BlendDetail from './index';

jest.mock('axios');

test('renders home page', async () => {
  axios.get.mockImplementation(() =>
    Promise.resolve({ status: 200, data: [] })
  );
  await act(async () => {
    render(<BlendDetail />);
  });
  const blendElement = screen.getByText(/Blend Detail Page/i);
  expect(blendElement).toBeInTheDocument();
});
