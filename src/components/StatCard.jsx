import { Card } from 'react-bootstrap';

function StatCard({ icon, value, label, variant = 'primary' }) {
  const bgColors = {
    primary: 'bg-primary',
    success: 'bg-success',
    info: 'bg-info',
    warning: 'bg-warning',
    secondary: 'bg-secondary'
  };

  return (
    <Card className="h-100 shadow-sm border-0">
      <Card.Body className="d-flex align-items-center">
        <div 
          className={`${bgColors[variant]} text-white rounded-circle p-3 me-3 d-flex align-items-center justify-content-center`}
          style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}
          aria-hidden="true"
        >
          {icon}
        </div>
        <div>
          <h3 className="mb-0 fw-bold">{value}</h3>
          <p className="text-muted mb-0 small">{label}</p>
        </div>
      </Card.Body>
    </Card>
  );
}

export default StatCard;
