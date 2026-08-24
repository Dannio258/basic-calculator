import "./App.css";

function Button({ children, className = '' }) {
  return (
    <>
      <button className={`px-4 py-2 rounded-xl bg-violet-400 text-6xl ${className}`}>
        {children}
      </button>
    </>
  );
}
export default Button;
