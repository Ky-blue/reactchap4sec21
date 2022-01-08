import "./styles.css";
import React, { useState } from "react";

//ログイン状態で表示されるLogoutButtonコンポーネント
const LogoutButton = (props) => (
  <button onClick={props.toggleIsLoggedIn}>ログアウト</button>
);

const LoginButton = (props) => (
  <button onClick={props.toggleIsLoggedIn}>ログイン</button>
);

const LoginControl = () => {
  //状態管理の変数とそれの管理の関数のuseState
  //状態変数はブール値、管理関数はsetIsLoggedInState
  const [isLoggedIn, setIsLoggedInState] = useState(false);

  //クリックで状態管理変数をトグルさせる関数
  const toggleIsLoggedIn = () => {
    setIsLoggedInState(!isLoggedIn);
  };

  if (isLoggedIn) {
    //ログイン状態でログアウトボタンを表示させる
    return <LogoutButton toggleIsLoggedIn={toggleIsLoggedIn} />;
  }

  if (!isLoggedIn) {
    return <LoginButton toggleIsLoggedIn={toggleIsLoggedIn} />;
  }
};

export default function App() {
  return <LoginControl />;
}
