import { useEffect, useState } from "react";

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
              id="todo-input"
              placeholder="Enter a task"
            />
          </div>
          <button className="btn">Add</button>
        </div>
      </div>
      <div className="cont__items">
        {intialItem.map((listItem: ItemType) => {
          return (
            <div className="cont__item" key={listItem.label}>
              <div className="cont__item__label">{listItem.label}</div>
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
