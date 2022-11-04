const App = ({ index, currentItem, setArray, array }) => {
  const handleClick = (e, item, index) => {
    e.preventDefault(); 
    var temp = [...array];
    var position = 0;
    for (const element of temp) {
      if (position == index) {
        element["isSelected"] = true;
      } else element["isSelected"] = false;
      position++;
    }
    setArray(temp)

  };
  return (
    <div
      className="singleuser"
      onClick={(e) => handleClick(e, currentItem.name, index)}
    >
      <div
        className={currentItem.isSelected ? "selectedredcircle" : "redcircle"}
      ></div>
      <label>{currentItem.name}</label>
    </div>
  );
};
export default App;
