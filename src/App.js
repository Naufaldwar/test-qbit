// import logo from "./logo.svg";
import "./App.css";
import { fruits, comments } from "./data.ts";
import { useState, useEffect } from "react";

function App() {
  const [fruitTypeCount, setFruitTypeCount] = useState(0);
  useEffect(() => {
    const uniqueFruitTypes = new Set(fruits.map((fruit) => fruit.fruitType));
    const count = uniqueFruitTypes.size;
    setFruitTypeCount(count);
  }, []);

  const countCommentContent = (comments) => {
    let count = 0;

    for (const comment of comments) {
      count++;

      if (comment.replies) {
        count += countCommentContent(comment.replies);
      }
    }

    return count;
  };

  return (
    <div className="App">
      <h1>Case 1</h1>
      <p>
        buah yang dimiliki andi :{" "}
        {fruits.map((item, index) => (
          <span style={{ marginLeft: "4px" }} key={index}>
            {item.fruitName}
          </span>
        ))}
      </p>
      <p>jumlah wadah: {fruitTypeCount}</p>
      <p>
        buah local:{" "}
        {fruits.map((item, index) => {
          if (item.fruitType === "LOCAL") {
            return (
              <span key={index} style={{ marginLeft: "4px" }}>
                {item.fruitName}
              </span>
            );
          }
        })}
      </p>

      <p>
        buah import:
        {fruits.map((item, index) => {
          if (item.fruitType === "IMPORT") {
            return (
              <span key={index} style={{ marginLeft: "4px" }}>
                {item.fruitName}
              </span>
            );
          }
        })}
      </p>
      <p>komentar : terdapat id yang sama</p>
      <h1>Case 2 </h1>
      <p>Jumlah Comment : {countCommentContent(comments)}</p>
    </div>
  );
}

export default App;
