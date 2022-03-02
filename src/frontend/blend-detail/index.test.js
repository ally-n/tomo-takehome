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

