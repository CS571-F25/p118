import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <div className="text-center">
          <p className="mb-1">👔 AI Closet - Your Smart Fashion Assistant</p>
          <p className="text-muted mb-0">
            &copy; {new Date().getFullYear()} AI Closet. Built with React & React Bootstrap.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
