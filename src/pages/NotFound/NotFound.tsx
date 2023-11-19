import './NotFound.scss';

function NotFound() {
  return (
    <section className="not-found-page" aria-label="Not found page">
      <div className="not-found__inner">
        <h2 className="not-found__title">404</h2>
        <h3 className="not-found__text">Page not found</h3>
      </div>
    </section>
  );
}

export default NotFound;
