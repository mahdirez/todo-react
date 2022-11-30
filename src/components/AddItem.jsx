import React from "react";

export default function AddItem({ list  , setList}) {
  function handleRemove(itemId){
     let filterList = list.filter((item)=> item.id !== itemId);
     setList(filterList)
  }
  return (
    <ul>
      {list.map(({ id, title }) => {
        return (
          <li key={id} className="bg-white w-40 flex justify-between p-2">
            <div>{title}</div>
            <div className="flex gap-2">
              <i className="bi bi-pencil-square text-green-700 cursor-pointer"></i>
              <i onClick={()=>handleRemove(id)} className="bi bi-trash3-fill text-red-600 cursor-pointer"></i>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
