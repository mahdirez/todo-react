import { useState } from "react";
import AddItem from "./components/AddItem";
import ClearAll from "./components/ClearAll";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();
    setList([...list, { id: Math.random() * 100, title: inputValue }]);
    setInputValue("");
  };
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="bg-slate-700  p-10 rounded flex flex-col gap-10 justify-center items-center">
        <p>TODO APP</p>
        <form onSubmit={handleAdd} className="flex flex-wrap gap-2">
          <input
            placeholder="enter text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="border-none outline-none p-2 bg-slate-200 rounded "
          />
          <button className="p-2 bg-slate-200 rounded ">add</button>
        </form>
        <AddItem list={list} setList={setList} />
        <ClearAll setList={setList}/>
      </div>
      
    </div>
  );
}

export default App;
