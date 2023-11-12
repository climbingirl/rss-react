import { render, screen } from '@testing-library/react';
import withRouter from '../../test/withRouter';
import ROUTES from '../../router/routes';
import NotFound from './NotFound';

describe('NotFound', () => {
  it('renders by "404" route', () => {
    render(withRouter(<NotFound />, ROUTES.NOT_FOUND));
    const notFoundPage = screen.getByRole('region', { name: 'Not found page' });
    expect(notFoundPage).toBeInTheDocument();
  });

  it('renders by invalid route', () => {
    render(withRouter(<NotFound />, 'this-route-does-not-exist'));
    const notFoundPage = screen.getByRole('region', { name: 'Not found page' });
    expect(notFoundPage).toBeInTheDocument();
  });

  it('has "404" title', () => {
    render(withRouter(<NotFound />, ROUTES.NOT_FOUND));
    const title = screen.getByRole('heading', { level: 2 });
    expect(title).toHaveTextContent('404');
  });
});
