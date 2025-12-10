import { Spinner } from 'react-bootstrap';

function LoadingSpinner({ message = 'Loading...', size = 'md' }) {
  const spinnerSize = size === 'sm' ? 'sm' : undefined;
  
  return (
    <div 
      className="d-flex flex-column align-items-center justify-content-center py-5"
      role="status"
      aria-live="polite"
    >
      <Spinner 
        animation="border" 
        variant="primary" 
        size={spinnerSize}
        aria-hidden="true"
      />
      <span className="mt-3 text-muted">{message}</span>
      <span className="visually-hidden">{message}</span>
    </div>
  );
}

export default LoadingSpinner;
