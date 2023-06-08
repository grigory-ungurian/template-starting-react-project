import "./StartScreenStub.css";

import { ReactComponent as Cog } from "../../assets/svg/icons/cog.svg";

function StartScreenStub() {
  return (
    <>
      <h1 className="title">Стартовый шаблон</h1>
      <span className="icon">
        <Cog width="36px" height="36px" />
      </span>
    </>
  );
}

export default StartScreenStub;
