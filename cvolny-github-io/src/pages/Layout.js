import { Outlet, NavLink } from "react-router-dom";
import "../App.css"

const Layout = () => {
  return (
    <>
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
        <div class="container-fluid">
          <div class="d-flex justify-content-start align-items-center">
            <a class="navbar-brand" href="/">
              <img src="img/cvolny-avatar.png" alt="Avatar for Cupcake Volny" class="rounded-pill nav-logo" />
            </a>
            <ul class="navbar-nav">
              <li class="nav-item">
                <NavLink to="/" className="nav-link">Home</NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/professional" className="nav-link">Professional</NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/social" className="nav-link">Social</NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/music" className="nav-link">Music</NavLink>
              </li>
            </ul>
          </div>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="https://www.github.com/cvolny" target="_blank" rel="noreferrer">
                <img src="/img/logo-github.png" alt="find cvolny on github" class="nav-logo" />
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://www.linkedin.com/in/cvolny" target="_blank" rel="noreferrer">
                <img src="/img/logo-linkedin.png" alt="find cvolny on LinkedIn" class="nav-logo" />
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://soundcloud.com/0xcupcake" target="_blank" rel="noreferrer">
                <img src="/img/logo-soundcloud.png" alt="find 0xCupcake on soundcloud" class="nav-logo" />
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
