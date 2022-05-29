import React from "react";

const style = {
  backgroundColor: "rgb(48, 161, 123)",
  width: "90%",
  height: "38px",
  padding: "8px",
  margin: "8px",
  borderRadius: "10px"
};

const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <>
      <div style={style}>
        <input
          disabled={disabled}
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChange}
        />
        <button disabled={disabled} onClick={onClick}>
          追加
        </button>
      </div>
    </>
  );
};

export default InputTodo;
