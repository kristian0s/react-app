import { useState } from "react";

type ItemType = {
  id: number;
  label: string;
  done: boolean;
};

const intialItem: ItemType[] = [
  {
    id: 1,
    label: "Naucit JavaScript",
    done: false,
  },
];

const Todo = () => {
  const [listItems, setListItems] = useState<ItemType[]>(intialItem);
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div className="cont">
      <div>
        <h1 className="cont__title">Todo list</h1>
        <div className="cont__input">
          <div>
            <input
              className="cont__field"
              type="text"
              id=""
              placeholder="Enter a task"
            />
          </div>
          <button className="btn">Add</button>
        </div>
      </div>
      <div className="cont__items">
        {intialItem.map((listItem: ItemType) => {
          return (
            <div className="cont__item" key={listItem.id}>
              {listItem.done ? "gotovo" : ""}
              <div className="cont__item__label">{listItem.id}</div>
              <div className="cont__item__remove">
                <img src="" alt="" />
              </div>
            </div>
          );
        })}
        <button className="btn">Delete all</button>
      </div>
    </div>
  );
};

export default Todo;

// const Todo = () => {
//   const [listItems, setListItems] = useState<ListItemType[]>(initialList);
//   const [inputValue, setInputValue] = useState<string>("");

//   const handleAdd = () => {
//     const newListItem = {
//       id: listItems.length + 1,
//       label: inputValue,
//       done: false,
//     };

//     setListItems([...listItems, newListItem]);
//     setInputValue("");
//   };

//   const deleteItem = (id: number) => {
//     const newList = listItems.filter((listItem) => listItem.id !== id);
//     setListItems(newList);
//   };

//   const handleCheck = (id: number) => {
//     const newList = listItems.map((listItem) => {
//       if (listItem.id === id) {
//         return { ...listItem, done: true };
//       }
//       return listItem;
//     });
//     setListItems(newList);
//   };

//   return (
//     <div className="container">
//       <h1>To Do list</h1>
//       <hr />
//       <div className="todo">
//         <div className="todo__header">
//           <input
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             className="todo__input"
//             type="text"
//           />
//           <button onClick={() => handleAdd()} className="todo__btn">
//             Dodaj
//           </button>
//         </div>
//         <div className="todo__item__wrapper">
//           {listItems.map((listItem: ListItemType) => {
//             return (
//               <div className="todo__item" key={listItem.id}>
//                 {listItem.done ? "gotovo" : ""}
//                 <div
//                   onClick={() => handleCheck(listItem.id)}
//                   className="todo__item__label"
//                 >
//                   {listItem.label}
//                 </div>
//                 <div
//                   onClick={() => deleteItem(listItem.id)}
//                   className="todo__item__remove"
//                 >
//                   <IconTrash />
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Todo;
