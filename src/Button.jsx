import "./App.css";

function Button({ children}) {
  return (
    <button
      className={`size-20 rounded-xl bg-violet-400 text-600 text-3xl font-bold
                  flex items-center justify-center hover:opacity-80 cursor-pointer`}
    >
      {children}
    </button>
  );
}
export default Button;
