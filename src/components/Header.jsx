import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="btn-neutral">
      <div className="container-css py-2 flex justify-center items-center sm:justify-end gap-6">
        <Link to="/register" className="link link-hover text-xs sm:text-sm">
          Sign in / Guest
        </Link>
        <Link to="/login" className="link link-hover text-xs sm:text-sm">
          Create accaunt
        </Link>
      </div>
    </div>
  );
}

export default Header;
