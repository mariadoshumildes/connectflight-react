import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { to: '/destinos', label: 'Destinos' },
  { to: '/ofertas', label: 'Ofertas' },
  { to: '/contato', label: 'Contato' },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <nav aria-label="Navegação principal" className="footer-nav">
        {navItems.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => `footer-nav__link${isActive ? ' footer-nav__link--active' : ''}`}
          >
            {label}
          </NavLink>
        ))}
      </nav>
      <div className="wave" aria-hidden="true">
        <svg viewBox="0 0 1440 154" preserveAspectRatio="none" role="presentation">
          <path d="M0 42C188 31 296 8 459 12c162 4 283 33 434 53 201 27 311-1 547-65v154H0Z" fill="currentColor" />
        </svg>
      </div>
      <div className="wave-tail">
        <Link to="/" className="wave-tail__brand" aria-label="Voltar à página inicial">ConnectFlight</Link>
        <span>Projeto acadêmico demonstrativo</span>
      </div>
    </footer>
  );
}
