import "./App.css"
function OutputArea({ value }) {
  return (
    <div
      id="output"
      className="w-full h-20 px-4 flex items-center justify-end border-2 rounded-xl text-amber-50 text-4xl overflow-hidden whitespace-nowrap"
    >
      {value}
    </div>
  );
}
export default OutputArea