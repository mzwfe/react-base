import { Button, Checkbox } from "antd";
import { useEffect, useState } from "react";
import { todoList } from "../mock";

type checkItem = { checked: boolean; id: string; title: string };

function List() {
  const [list, setList] = useState<checkItem[]>([]);

  useEffect(() => {
    setList(JSON.parse(JSON.stringify(todoList)));
  }, []);

  const onChange = (e: checkItem) => {
    const nextList = list?.map((item) => {
      if (e.id === item.id) {
        item.checked = !item.checked;
      }
      return item;
    });
    setList(nextList);
  };

  const submit = () => {
    console.log(list);
  };

  return (
    <>
      {list?.map((item) => {
        return (
          <div key={item.id}>
            <Checkbox
              checked={item.checked}
              onChange={() => {
                onChange(item);
              }}
              value={item}
            >
              {item.title}
            </Checkbox>
          </div>
        );
      })}
      <div>
        <Button type="primary" onClick={submit}>
          Primary Button
        </Button>
      </div>
    </>
  );
}

export default List;
