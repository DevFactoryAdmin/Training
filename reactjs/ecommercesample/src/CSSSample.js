import "./teststyle.css";
function CSSSample() {
  return (
    <>
      <div className="outer">
        <div className="firstRow"></div>
        <div className="secondRow">
          <div className="firstColumn"></div>
          <div className="secondColumn">
            <div className="rowOne">
              <div className="heading">
                <h2>Task List</h2>
              </div>
              <div className="button">
                <button>Create New</button>
              </div>
            </div>
            <div className="rowTwo">
              <table>
                <tr>
                  <th className="tenperc">Id</th>
                  <th className="twentyperc">Name</th>
                  <th>ThirColumn</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Ismail</td>
                  <td></td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Ismail</td>
                  <td></td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Ismail</td>
                  <td></td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Ismail</td>
                  <td></td>
                </tr>
              </table>
            </div>
            <div className="rowThree">
              <button>{"<"}</button>
              <button>2</button>
              <button>3</button>
              <button>...</button>
              <button>{">"}</button>
            </div>
            <div className="fourthRow">
              <div className="slider">
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CSSSample;
