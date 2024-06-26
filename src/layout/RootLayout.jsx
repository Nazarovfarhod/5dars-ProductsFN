import { Link, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <header>
        <nav>
          <div className="navbar bg-base-100 px-14 mb-10 shadow-xl rounded-2xl">
            <div className="flex-1">
              <Link to="/" className="btn btn-ghost text-2xl italic">
                <span className="text-4xl font-serif font-bold text-info italic underline">
                  FN
                </span>{" "}
                products
              </Link>
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <Link className="text-xl font-medium font-serif" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-xl font-medium font-serif"
                    to="/products"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <details>
                    <summary className="text-xl font-medium font-serif">
                      Pages
                    </summary>
                    <ul className="bg-base-100 rounded-t-none p-2">
                      <li>
                        <Link
                          className="text-xl font-medium font-serif"
                          to="/about"
                        >
                          About
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-xl font-medium font-serif"
                          to="/contact"
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main className="container ml-auto mr-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
