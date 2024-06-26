import DarkModeToggle from "./DarkModeToggle";
import Logo from "./Logo";
import UserInput from "./UserInput";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-slate-50 dark:bg-gray-900">
      <nav className="flex flex-col md:flex-row items-center p-5 pl-2 bg-slate-50 dark:bg-gray-900 max-w-7xl mx-auto">
        <Logo />

        <div className="flex-1 flex items-center justify-end space-x-4">
          <DarkModeToggle />
          <UserInput />
        </div>
      </nav>
    </header>
  );
}

export default Header;
