import { useContext, useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';

function Header() {
  const { user, logOut, userLoading } = useContext(AuthContext);

  const menu = (
    <ul className="flex flex-col lg:flex-row gap-3 lg:gap-6">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/all-visa">All Visa</NavLink>
      <NavLink to="/add-visa">Add Visa</NavLink>
      <NavLink to="/my-added-visa">My Added Visa</NavLink>
      <NavLink to="/my-visa-applications">My Visa Application</NavLink>
    </ul>
  );

  const [theme, setTheme] = useState('dark'); // Example state

  // Effect to update CSS variables dynamically
  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.style.setProperty('--back', '#222');
      document.documentElement.style.setProperty('--front', '#dcd');
      document.documentElement.style.setProperty('--middle', '#026d6d');
    } else if (theme === 'dark') {
      document.documentElement.style.setProperty('--back', '#f8f8f8');
      document.documentElement.style.setProperty('--front', '#292828');
      document.documentElement.style.setProperty('--middle', '#07dada');
    }
  }, [theme]);

  return (
    <div className="w-full h-[10vh] flex justify-center items-center">
      <div className="navbar z-40 fixed mid h-[10vh]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mid p-4 rounded-box z-[1] mt-6 w-52 shadow"
            >
              {menu}
            </ul>
          </div>
          {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/paper-plane-3d-icon-download-in-png-blend-fbx-gltf-file-formats--sent-send-message-user-interface-pack-icons-4652892.png?f=webp"
            alt="logo"
            className="w-10"
          />{' '}
          <span className="text-xl ml-2 font-bold font-mono hidden lg:flex">
            Visa Navigator
          </span>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menu}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center justify-between">
            <input
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              type="checkbox"
              className="toggle toggle-md rotate-180"
              defaultChecked
            />
            {!user ? (
              <div
                className={`${userLoading && 'invisible'} navbar-end space-x-3 flex ml-2`}
              >
                <Link to="/login" className="btn mid btn-success">
                  Login
                </Link>
                <Link to="/register" className="btn btn-outline btn-success">
                  Register
                </Link>
              </div>
            ) : (
              <div
                className={`${userLoading && 'invisible'} items-center space-x-3 flex ml-2`}
              >
                <p className="mx-2 font-semibold text-md lg:text-xl flex">
                  👋 {user.displayName}
                </p>
                <p onClick={logOut} className="btn mid">
                  LogOut
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
