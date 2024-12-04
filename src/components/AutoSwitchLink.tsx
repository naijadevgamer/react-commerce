import { Link, To } from "react-router-dom";

interface AuthSwitchLinkProps {
  text: string; // Display text, e.g., "or login here"
  href?: To; // URL to navigate to, e.g., "/login" or "/signup"
}

const AuthSwitchLink: React.FC<AuthSwitchLinkProps> = ({ text, href }) => {
  return (
    <div className="mt-4 flex items-center justify-between">
      <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
      {href ? (
        <Link
          to={href as To}
          className="text-center text-xs uppercase text-gray-500 hover:underline dark:text-gray-400"
        >
          {text}
        </Link>
      ) : (
        <div className="text-center text-xs uppercase text-gray-500 hover:underline dark:text-gray-400">
          {text}
        </div>
      )}

      <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
    </div>
  );
};

export default AuthSwitchLink;
