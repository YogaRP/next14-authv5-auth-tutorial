import { logout } from "@/actions/logout";
import React, { FC } from "react";

interface LogoutButtonProps {
  children: React.ReactNode;
}

const LogoutButton: FC<LogoutButtonProps> = ({ children }) => {
  const onClickLogout = () => {
    logout();
  };
  return (
    <span onClick={onClickLogout} className="cursor-pointer">
      {children}
    </span>
  );
};

export default LogoutButton;
