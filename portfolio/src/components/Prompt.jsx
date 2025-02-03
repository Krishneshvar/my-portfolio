function Prompt() {
  return (
    <div className="flex flex-row items-center">
      <div>
        <span className="text-green-500">user</span>
        <span className="text-white">:</span>
        <span className="text-blue-500">~</span>
        <span className="text-white"> $</span>
      </div>
      <input type="text" />
    </div>
  );
}

export default Prompt;
