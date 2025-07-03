import clsx from "clsx";
import { CategoryList } from "../CategoryList";
import { CategoryItem } from "../CategoryItem";
import { FaHouse } from "react-icons/fa6";
import { FaDog } from "react-icons/fa6";
import { FaShirt } from "react-icons/fa6";
import { FaKitchenSet } from "react-icons/fa6";
import { FaBook } from "react-icons/fa6";
import { FaPerson } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import { FaBed } from "react-icons/fa6";

export function SidebarDesktop() {
  return (
    <nav className="h-screen bg-purple-700 fixed hidden lg:block w-[300px]">
      <CategoryList>
        <CategoryItem className={clsx(true && "bg-white text-purple-700")}>
          <FaHouse /> Home
        </CategoryItem>
        <CategoryItem className={clsx(false && "bg-white text-purple-700")}>
          <FaDog /> Animais
        </CategoryItem>
        <CategoryItem className={clsx(false && "bg-white text-purple-700")}>
          <FaPerson /> Corpo
        </CategoryItem>
        <CategoryItem className={clsx(false && "bg-white text-purple-700")}>
          <FaKitchenSet /> Cozinha
        </CategoryItem>
        <CategoryItem className={clsx(false && "bg-white text-purple-700")}>
          <FaBook /> Escola
        </CategoryItem>
        <CategoryItem className={clsx(false && "bg-white text-purple-700")}>
          <FaUserGroup /> Família
        </CategoryItem>
        <CategoryItem className={clsx(false && "bg-white text-purple-700")}>
          <FaBed /> Quarto
        </CategoryItem>
        <CategoryItem className={clsx(false && "bg-white text-purple-700")}>
          <FaShirt /> Roupas
        </CategoryItem>
      </CategoryList>
    </nav>
  );
}

SidebarDesktop.displayName = "SidebarDesktop";
