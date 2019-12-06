import React, { ReactElement, useEffect, useState, useRef } from "react";
import { ICuration, IUserInfo } from "./../shared/Types";
import { fetchCuration } from "./../shared/Fetch";
import { curations } from "./../shared/InitialStates";
import Entry from "./../shared/curationEntry";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./index.css";

interface IProps {
  user: IUserInfo;
}
const Curation: React.FC<IProps> = (props: any): ReactElement => {
  const [myCuration, setMyCuration] = useState<ICuration[]>(curations);

  // componentDidUpdate 사용했었다가 componentDidMount로 바꿈
  useEffect(() => {
    fetchCuration(setMyCuration, props.user._id);
  }, []);

  return (
    <div className="wrapper">
      {console.log(props.user)}
      <h2 style={{ fontFamily: "Nanum Myeongjo, serif", fontWeight: "bold" }}>
        나의 큐레이션{" "}
        <button
          className="uk-button uk-button-default"
          style={{ float: "right" }}
        >
          <Link to={"/postcuration"} style={{ color: "black" }}>
            큐레이션 쓰러가기
          </Link>
        </button>
      </h2>

      <hr style={{ marginTop: "5px" }} />
      {myCuration.length ? (
        myCuration.map((el: ICuration) => {
          return <Entry curation={el} from={"my"} />;
        })
      ) : (
        <div></div>
      )}
    </div>
  );
};

function mapStateToProps(state: any): any {
  return {
    user: state.user.User
  };
}

export default connect(mapStateToProps)(Curation);
