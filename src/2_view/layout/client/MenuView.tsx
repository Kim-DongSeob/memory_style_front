'use client';

import Link from "next/link";
import {useEffect, useState} from "react";
import {LayoutApiStub} from "@/1_api/layout";

interface Menu {
  id: string;
  name: string;
  slug: string;
}

interface Props {
  menuList: Menu[];
}


const MenuView = (props?: Props) => {
  // const {menuList} = props;

  const [menuList, setMenuList ] = useState<Menu[]>([]);
  useEffect(() => {
    console.log('rhrhrhrhrh')
    LayoutApiStub.test().then(r => setMenuList(r.data));
  }, [])

  console.log(menuList);


  return (
    <ul>
      {menuList && menuList.map((menu) => (
        <li key={menu.id}>
          <Link href={`/${menu.slug}`}>{menu.name}</Link>
        </li>
      ))}
    </ul>
  )
}

export default MenuView;
