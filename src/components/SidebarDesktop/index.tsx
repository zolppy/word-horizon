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
        <CategoryItem>
          <FaHouse /> Home
        </CategoryItem>
        <CategoryItem>
          <FaDog /> Animais
        </CategoryItem>
        <CategoryItem>
          <FaPerson /> Corpo
        </CategoryItem>
        <CategoryItem>
          <FaKitchenSet /> Cozinha
        </CategoryItem>
        <CategoryItem>
          <FaBook /> Escola
        </CategoryItem>
        <CategoryItem>
          <FaUserGroup /> Família
        </CategoryItem>
        <CategoryItem>
          <FaBed /> Quarto
        </CategoryItem>
        <CategoryItem>
          <FaShirt /> Roupas
        </CategoryItem>
      </CategoryList>
    </nav>
  );
}

SidebarDesktop.displayName = "SidebarDesktop";
