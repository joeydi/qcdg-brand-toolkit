import { fluid, SM, XXL } from '../styles';
import Container from '../components/Container';
import Logo from '../assets/logo.svg';
import Nav from '../components/Nav';
import AnimatedOutlet from '../components/AnimatedOutlet';
import { Link } from 'react-router-dom';
import { menuItems } from '../data';

export default function Root() {
  return (
    <Container
      css={{
        paddingTop: '1px',
        paddingBottom: '1px',
      }}>
      <header css={{ marginTop: fluid(36, 96, SM, XXL) }}>
        <Link to="/">
          <img
            css={{
              width: 'auto',
              height: 'max(2rem, 32px)',
              marginBottom: fluid(64, 192, SM, XXL),
            }}
            src={Logo}
            alt="Queen City Development Group logo"
          />
        </Link>
        <h1>Brand Toolkit</h1>
        <p className="lead">Use these resources to keep the Queen City brand consistent and looking it’s best.</p>
      </header>
      <Nav menu={menuItems} />
      <main css={{ marginTop: fluid(64, 192, SM, XXL), marginBottom: fluid(64, 192, SM, XXL) }}>
        <AnimatedOutlet />
      </main>
      <footer css={{ marginTop: fluid(64, 192, SM, XXL), marginBottom: fluid(64, 192, SM, XXL) }}>
        <div className="container">
          <p>&copy; 2024 Queen City Development Group</p>
        </div>
      </footer>
    </Container>
  );
}
