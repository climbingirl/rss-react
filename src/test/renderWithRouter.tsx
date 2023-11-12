import { render } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

export const renderWithRouter = (component: React.ReactNode) => {
  const router = createMemoryRouter([
    {
      path: '/',
      element: component,
    },
  ]);

  render(<RouterProvider router={router} />);
  return router;
};
