import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { Home, Info, LogOut, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  const [isDark, setIsDark] = useState(() => {
    const theme = localStorage.getItem("theme");
    if (theme) return theme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div className="bg-white dark:bg-slate-800 text-gray-800 dark:text-slate-100 border-b border-gray-200 dark:border-slate-600 shadow-md p-6 flex justify-between font-ubuntu">
      <div className="text-2xl font-semibold">To Do App</div>
      <div className="flex space-x-4 items-center">
        <Link
          to="/"
          className="flex items-center gap-1 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
        >
          <Home size={20} />
          <span className="hidden sm:inline">Home</span>
        </Link>
        <Link
          to="/about"
          className="flex items-center gap-1 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
        >
          <Info size={20} />
          <span className="hidden sm:inline">About</span>
        </Link>
        <p
          onClick={handleLogout}
          className="flex items-center gap-1 cursor-pointer text-gray-600 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400 transition-colors"
        >
          <LogOut size={20} />
          <span className="hidden sm:inline">LogOut</span>
        </p>
        <div
          onClick={() => setIsDark(!isDark)}
          className="cursor-pointer text-gray-600 hover:text-yellow-600 dark:text-gray-300 dark:hover:text-yellow-400 transition-colors"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
