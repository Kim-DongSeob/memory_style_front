import MenuView from "@/2_view/layout/client/MenuView";
import React from "react";

// const menuList = [
//   {
//     id: '1',
//     name: 'about',
//     slug: 'about'
//   },
//   {
//     id: '2',
//     name: 'dashboard',
//     slug: 'dashboard'
//   },
// ]


const HeaderLayout = (
  {
    onClick
  }: {onClick:(event: React.MouseEvent<HTMLElement>) => void }) => {
  return (
    <div>
      <div>Header</div>
      <button onClick={onClick}>Header CSR Button</button>
    </div>
  )
}

export default HeaderLayout;
