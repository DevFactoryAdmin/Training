import { Container } from "./Container";
import { InnerContainer } from "./pages/InnerContainer";
import './styles.css'
const BasicPage = () => {
  return (
    <div className="contents">
      <InnerContainer />
      <Container />
    </div>
  );
};
export default BasicPage;
