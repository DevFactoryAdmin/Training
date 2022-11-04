import { useCallback, useState } from "react";
import { Card } from "../Card";
import update from 'immutability-helper'

export const InnerContainer = () => {
    const [first, setFirst] = useState([
      {
        id: 1,
        text: "Inner new one",
      },
      {
        id: 2,
        text: "Inner new two",
      },
      {
        id: 3,
        text: "Inner new one",
      },
    ]);
    const [second, setSecond] = useState([
      {
        id: 1,
        text: "Inner second one",
      },
      {
        id: 2,
        text: "Inner second two",
      },
      {
        id: 3,
        text: "Inner second three",
      },
    ]);
    const [third, setThird] = useState([
      {
        id: 1,
        text: "Inner new one",
      },
      {
        id: 2,
        text: "Inner new one",
      },
      {
        id: 3,
        text: "Inner new one",
      },
    ]);

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setFirst((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      }),
    )
  }, [])
  const renderCard = useCallback((card, index) => {
    return (
      <Card
        key={card.id}
        index={index}
        id={card.id}
        text={card.text}
        moveCard={moveCard}
      />
    )
  }, [])


  return (
    <>
      {" "}
      <div className="container">
        {first.map((card, i) => renderCard(card, i))}
        {second.map((card, i) => renderCard(card, i))}
        {third.map((card, i) => renderCard(card, i))}
      </div>
    </>
  );
};
