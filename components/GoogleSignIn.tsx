import { FC, ReactNode } from "react";

interface GoogleSignInButton {
  children: ReactNode;
}

const GoogleSignInButton: React.FC<GoogleSignInButton> = ({ children }) => {
  const loginWithGoogle = () => console.log("login with google");
  return (
    <button onClick={loginWithGoogle} className="w-full">
      {children}
    </button>
  );
};
