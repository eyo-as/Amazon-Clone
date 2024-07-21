import React, { useContext, useEffect } from "react";
import Routing from "./Router";
import { DataContext } from "./components/dataProvider/DataProvider";
import { Type } from "./utils/action.type";
import { auth } from "./utils/firebase";

const App = () => {
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // console.log(authUser);
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);
  return (
    <>
      <Routing />
    </>
  );
};

export default App;
