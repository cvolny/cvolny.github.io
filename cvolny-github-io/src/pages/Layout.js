import { Outlet, NavLink } from "react-router-dom";
import "../App.css"

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
        <div className="container-fluid">
          <div className="d-flex justify-content-start align-items-center">
            <a className="navbar-brand" href="/">
              <img src="/img/cvolny-avatar.png" alt="Avatar for Cupcake Volny" className="rounded-pill nav-logo" />
            </a>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">Home</NavLink>
              </li>
              <li className="nav-item dropdown">
                <button className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Professional</button>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li><NavLink to="/professional/" className="nav-link">Summary</NavLink></li>
                  <li><NavLink to="/professional/talks_and_projects" className="nav-link">Talks and Projects</NavLink></li>
                  <li><NavLink to="/professional/career" className="nav-link">Career</NavLink></li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink to="/social" className="nav-link">Social</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/music" className="nav-link">Music</NavLink>
              </li>
            </ul>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="https://www.github.com/cvolny" target="_blank" rel="noreferrer">
                <img src="/img/logo-github.png" alt="find cvolny on github" className="nav-logo" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.linkedin.com/in/cvolny" target="_blank" rel="noreferrer">
                <img src="/img/logo-linkedin.png" alt="find cvolny on LinkedIn" className="nav-logo" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://soundcloud.com/0xcupcake" target="_blank" rel="noreferrer">
                <img src="/img/logo-soundcloud.png" alt="find 0xCupcake on soundcloud" className="nav-logo" />
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
