import { useEffect, useState } from 'react';
import { NavLink } from 'react-router';

function Header() {
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
      document.documentElement.style.setProperty('--back', '#120f0f');
      document.documentElement.style.setProperty('--front', '#f8f8f8');
      document.documentElement.style.setProperty('--middle', '#026d6d');
    } else if (theme === 'dark') {
      document.documentElement.style.setProperty('--back', '#f8f8f8');
      document.documentElement.style.setProperty('--front', '#120f0f');
      document.documentElement.style.setProperty('--middle', '#07dada');
    }
  }, [theme]);

  return (
    <div className="w-full mid h-[15vh] lg:h-[10vh] flex justify-center items-center">
      <div className="navbar">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
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
          <span className="text-xl ml-2 font-bold font-mono">
            Visa Navigator
          </span>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menu}</ul>
        </div>
        <div className="navbar-end">
          <div>
            <input
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              type="checkbox"
              className="toggle toggle-md rotate-180"
              defaultChecked
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
