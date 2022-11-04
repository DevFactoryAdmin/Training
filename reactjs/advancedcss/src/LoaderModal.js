
import "./loaderstyle.css";

const LoaderModal = ({ show }) => {
  return <div className={show ? "loader" : "hidden"}></div>;
};
export default LoaderModal;