import "./App.css";

function Button({ children, className="" }) {
  return (
    <button
      className={`min-w-12 min-h-12 sm:min-w-20 sm:min-h-20 rounded-xl bg-gray-700 text-slate-100 text-3xl font-bold
                  flex items-center justify-center hover:bg-gray-600 hover:text-white cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}
export default Button;
