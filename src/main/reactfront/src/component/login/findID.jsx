import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import "../../style/loginScreen.css";
import img01 from "../../image/cyber.jpeg";

const FindID = () => {
  const [id, setId] = useState("");

  const setIds = e => {
    setId(e.target.value);
  };

  const findId = async () => {
    const result = await axios({
      method: "GET",
      mode: "cors",
      url: `/findId?id=${id}`,
    });

    if (result.data === -1) {
      alert("찾을 수 없는 아이디입니다.");
    } else {
      alert(`${id} 님의 앞3자리 비밀번호는 ${result.data}`);
    }
  };
  return (
    <Fragment>
      <div className="loginFrame">
        <Link to="/login">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            className="bi bi-arrow-left Arrows"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
        </Link>
        <div className="findIDArea">
          <span className="findIddescription" style={{ marginBottom: "20px" }}>
            please enter the id you use to sign in to website
          </span>
          <input
            type="text"
            className="idInput"
            placeholder="Username"
            onChange={setIds}
            style={{ marginBottom: "0px" }}
          />
          <br />
          <button type="submit" className="sbButton" onClick={findId}>
            비밀번호 찾기
          </button>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <span className="backtosignin">Back to Sign in</span>
          </Link>
        </div>
      </div>
      <div className="platform">
        <span className="platformTextbox"></span>
        <span className="platformTextbox2"></span>
        <img src={img01} alt="img" className="loginImg" />
      </div>
    </Fragment>
  );
};

export default FindID;
