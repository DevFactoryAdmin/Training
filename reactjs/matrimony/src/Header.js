const Header = () => {
  return (
    <>
      {" "}
      <div className="headrow wrapper">
        <div className="logo half">
          <img src="./images/logo_icon.svg" />
          <div className="logo_content">
            <label className="head">ChristianMatrimony.com</label>
            <label>From Matrimony.com Group</label>
          </div>
        </div>
        <div className="right_header half">
          <label>Already a member?</label>
          <button>Log In</button>
        </div>
      </div>
    </>
  );
};

export default Header;