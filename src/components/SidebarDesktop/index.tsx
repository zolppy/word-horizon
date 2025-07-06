import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { CategoryList } from "../CategoryList";
import { CategoryItem } from "../CategoryItem";
import { useSidebar } from "../../contexts/SidebarCtx";
import { Category } from "../../utils/enums/category";
import { FaHouse } from "react-icons/fa6";
import { FaDog } from "react-icons/fa6";
import { FaShirt } from "react-icons/fa6";
import { FaKitchenSet } from "react-icons/fa6";
import { FaSmile } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { FaPerson } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import { FaBed } from "react-icons/fa6";

export function SidebarDesktop() {
  const navigate = useNavigate();
  const { currentCategory, changeCategory } = useSidebar();

  return (
    <nav className="h-screen bg-purple-700 fixed hidden lg:block w-[300px]">
      <CategoryList>
        <CategoryItem
          onClick={() => {
            changeCategory(Category.Home), navigate("/");
          }}
          className={clsx(
            currentCategory === Category.Home && "bg-white text-purple-700"
          )}
        >
          <FaHouse /> Home
        </CategoryItem>
        <CategoryItem
          onClick={() => {
            changeCategory(Category.Animals), navigate("/animals");
          }}
          className={clsx(
            currentCategory === Category.Animals && "bg-white text-purple-700"
          )}
        >
          <FaDog /> Animais
        </CategoryItem>
        <CategoryItem
          onClick={() => {
            changeCategory(Category.Bedroom), navigate("/bedroom");
          }}
          className={clsx(
            currentCategory === Category.Bedroom && "bg-white text-purple-700"
          )}
        >
          <FaBed /> Quarto
        </CategoryItem>
        <CategoryItem
          onClick={() => {
            changeCategory(Category.Body), navigate("/body");
          }}
          className={clsx(
            currentCategory === Category.Body && "bg-white text-purple-700"
          )}
        >
          <FaPerson /> Corpo
        </CategoryItem>
        <CategoryItem
          onClick={() => {
            changeCategory(Category.Clothes), navigate("/clothes");
          }}
          className={clsx(
            currentCategory === Category.Clothes && "bg-white text-purple-700"
          )}
        >
          <FaShirt /> Roupas
        </CategoryItem>
        <CategoryItem
          onClick={() => {
            changeCategory(Category.Emotions), navigate("/school");
          }}
          className={clsx(
            currentCategory === Category.Emotions && "bg-white text-purple-700"
          )}
        >
          <FaSmile /> Emoções
        </CategoryItem>
        <CategoryItem
          onClick={() => {
            changeCategory(Category.Family), navigate("/family");
          }}
          className={clsx(
            currentCategory === Category.Family && "bg-white text-purple-700"
          )}
        >
          <FaUserGroup /> Família
        </CategoryItem>
        <CategoryItem
          onClick={() => {
            changeCategory(Category.Kitchen), navigate("/kitchen");
          }}
          className={clsx(
            currentCategory === Category.Kitchen && "bg-white text-purple-700"
          )}
        >
          <FaKitchenSet /> Cozinha
        </CategoryItem>
        <CategoryItem
          onClick={() => {
            changeCategory(Category.School), navigate("/school");
          }}
          className={clsx(
            currentCategory === Category.School && "bg-white text-purple-700"
          )}
        >
          <FaBook /> Escola
        </CategoryItem>
      </CategoryList>
    </nav>
  );
}

SidebarDesktop.displayName = "SidebarDesktop";
