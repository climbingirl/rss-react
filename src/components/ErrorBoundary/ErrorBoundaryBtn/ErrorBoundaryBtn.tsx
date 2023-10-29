import { PureComponent } from 'react';
import { EmptyProps } from '../../../types';
import './ErrorBoundaryBtn.scss';

interface ErrorBoundaryBtnState {
  hasError: boolean;
}

class ErrorBoundaryBtn extends PureComponent<
  EmptyProps,
  ErrorBoundaryBtnState
> {
  constructor(props: EmptyProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidUpdate() {
    if (this.state.hasError === true) {
      throw new Error('ErrorBoundary error');
    }
  }

  handleClick() {
    this.setState({ hasError: true });
  }

  render() {
    return (
      <button
        className="error-boundary-btn"
        onClick={this.handleClick.bind(this)}
      >
        Test ErrorBoundary
      </button>
    );
  }
}

export default ErrorBoundaryBtn;
