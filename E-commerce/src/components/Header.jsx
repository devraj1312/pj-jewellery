import "../App.css";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm">
      <div className="container">

        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src="/logo.jpeg" alt="Priya Jewellers" className="brand-logo" />
          <span className="brand-name ms-2">Priya Jewellers</span>
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">

            {/* SHOP JEWELLERY */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Shop Jewellery
              </a>

              <ul className="dropdown-menu mega-menu">
                <li><a className="dropdown-item" href="#">Gold Jewellery</a></li>
                <li><a className="dropdown-item" href="#">Silver Jewellery</a></li>
                <li><a className="dropdown-item" href="#">Diamond Jewellery</a></li>
                <li><a className="dropdown-item" href="#">Gemstone Jewellery</a></li>
                <li><a className="dropdown-item" href="#">Bridal Collection</a></li>
                <li><a className="dropdown-item" href="#">Men’s Collection</a></li>
                <li><a className="dropdown-item" href="#">Kids’ Collection</a></li>
              </ul>
            </li>

            {/* COLLECTIONS */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                Collections
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">New Arrivals</a></li>
                <li><a className="dropdown-item" href="#">Signature</a></li>
                <li><a className="dropdown-item" href="#">Festive</a></li>
                <li><a className="dropdown-item" href="#">Wedding</a></li>
                <li><a className="dropdown-item" href="#">Limited Edition</a></li>
              </ul>
            </li>

            {/* CUSTOM JEWELLERY */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                Custom Jewellery
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Design Your Jewellery</a></li>
                <li><a className="dropdown-item" href="#">Bespoke Orders</a></li>
                <li><a className="dropdown-item" href="#">Engraving Services</a></li>
              </ul>
            </li>

            {/* SIMPLE LINKS */}
            <li className="nav-item">
              <a className="nav-link" href="#">Investment</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Offers</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Store Locator</a>
            </li>

            {/* CTA */}
            {/* <li className="nav-item ms-lg-3">
              <a className="btn btn-outline-gold me-2" href="#">Call Expert</a>
              <a className="btn btn-gold" href="#">WhatsApp</a>
            </li> */}

          </ul>
        </div>
      </div>
    </nav>
  );
}

