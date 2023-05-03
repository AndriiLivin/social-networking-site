import React from "react";

// import preloader from "../PreloaderImages/loading-4.gif";

import style from "./preloader.module.css";

// let Preloader = (props) => {
//   return (
//     // <div style={{ backgroundColor : "white" }}>
//     <div>
//       {/* {" "} */}
//       <img src={preloader} width={"300px"} height={"195px"} alt="" />
//     </div>
//   );
// };
// export default Preloader;

let Preloader = (props) => {
  return (
    <div className={style.spinner_base}>
      <div className={style.spinner}>
        <div className={style.circle_white}></div>

        <div className={style.circle_black}></div>
      </div>
    </div>
  );
};
export default Preloader;
