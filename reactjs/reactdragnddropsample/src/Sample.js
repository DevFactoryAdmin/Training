import update from 'immutability-helper'
import { useCallback, useState } from "react";
import "./styles.css";
import { Card } from "./Card";
function Container() {
    const [one, setOne] = useState([
      {
        id: 1,
        text: "One",
      },
      {
        id: 2,
        text: "Two",
      },
      {
        id: 3,
        text: "Three",
      },
    ]);
    const [two, setTwo] = useState([
      {
        id: 1,
        text: "One",
      },
      {
        id: 2,
        text: "Two",
      },
      {
        id: 3,
        text: "Three",
      },
    ]);
    const [three, setThree] = useState([
      {
        id: 1,
        text: "One",
      },
      {
        id: 2,
        text: "Two",
      },
      {
        id: 3,
        text: "Three",
      },
    ]);

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setOne((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      }),
    )
  }, [])

  return (
    <div className="contents">
      <div className="column">
        {one.map((card, index) => {
          return (
            <Card
              key={card.id}
              index={index}
              id={card.id}
              text={card.text}
              moveCard={moveCard}
            />
          );
        })}
      </div>
      <div className="column"> {two.map((card, index) => {
          return (
            <Card
              key={card.id}
              index={index}
              id={card.id}
              text={card.text}
              moveCard={moveCard}
            />
          );
        })}</div>
      <div className="column"> {three.map((card, index) => {
          return (
            <Card
              key={card.id}
              index={index}
              id={card.id}
              text={card.text}
              moveCard={moveCard}
            />
          );
        })}</div>
    </div>
  );
}

export default Container;
