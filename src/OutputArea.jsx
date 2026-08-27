import "./App.css"
function OutputArea({ value }) {
  return (
    <div
      id="output"
      className="w-full h-20 px-4 flex items-center justify-end border-2 rounded-xl text-white text-4xl overflow-hidden whitespace-nowrap bg-slate-900"
    >
      {value}
    </div>
  );
}
export default OutputArea