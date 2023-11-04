import { useEffect, useState } from 'react';
import './ErrorBoundaryBtn.scss';

function ErrorBoundaryBtn() {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (hasError === true) {
      throw new Error('ErrorBoundary error');
    }
  }, [hasError]);

  function handleClick() {
    setHasError(true);
  }

  return (
    <button className="error-boundary-btn" onClick={handleClick}>
      Test ErrorBoundary
    </button>
  );
}

export default ErrorBoundaryBtn;
