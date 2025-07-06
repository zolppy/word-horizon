import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import { CategoryItem } from "../CategoryItem";
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
import { useSidebar } from "../../contexts/SidebarCtx";
import { useMenu } from "../../contexts/MenuCtx";

export function CategoryList() {
  const { closeMenu } = useMenu();
  const { currentCategory, changeCategory } = useSidebar();
  const navigate = useNavigate();

  return (
    <ul className="mt-20 lg:mt-0 p-4 flex flex-col gap-y-2 text-white">
      <CategoryItem
        onClick={() => {
          changeCategory(Category.Home), navigate("/"), closeMenu();
        }}
        className={clsx(
          currentCategory === Category.Home && "bg-white text-purple-700"
        )}
      >
        <FaHouse /> Home
      </CategoryItem>
      <CategoryItem
        onClick={() => {
          changeCategory(Category.Animals), navigate("/animals"), closeMenu();
        }}
        className={clsx(
          currentCategory === Category.Animals && "bg-white text-purple-700"
        )}
      >
        <FaDog /> Animais
      </CategoryItem>
      <CategoryItem
        onClick={() => {
          changeCategory(Category.Bedroom), navigate("/bedroom"), closeMenu();
        }}
        className={clsx(
          currentCategory === Category.Bedroom && "bg-white text-purple-700"
        )}
      >
        <FaBed /> Quarto
      </CategoryItem>
      <CategoryItem
        onClick={() => {
          changeCategory(Category.Body), navigate("/body"), closeMenu();
        }}
        className={clsx(
          currentCategory === Category.Body && "bg-white text-purple-700"
        )}
      >
        <FaPerson /> Corpo
      </CategoryItem>
      <CategoryItem
        onClick={() => {
          changeCategory(Category.Clothes), navigate("/clothes"), closeMenu();
        }}
        className={clsx(
          currentCategory === Category.Clothes && "bg-white text-purple-700"
        )}
      >
        <FaShirt /> Roupas
      </CategoryItem>
      <CategoryItem
        onClick={() => {
          changeCategory(Category.Emotions), navigate("/school"), closeMenu();
        }}
        className={clsx(
          currentCategory === Category.Emotions && "bg-white text-purple-700"
        )}
      >
        <FaSmile /> Emoções
      </CategoryItem>
      <CategoryItem
        onClick={() => {
          changeCategory(Category.Family), navigate("/family"), closeMenu();
        }}
        className={clsx(
          currentCategory === Category.Family && "bg-white text-purple-700"
        )}
      >
        <FaUserGroup /> Família
      </CategoryItem>
      <CategoryItem
        onClick={() => {
          changeCategory(Category.Kitchen), navigate("/kitchen"), closeMenu();
        }}
        className={clsx(
          currentCategory === Category.Kitchen && "bg-white text-purple-700"
        )}
      >
        <FaKitchenSet /> Cozinha
      </CategoryItem>
      <CategoryItem
        onClick={() => {
          changeCategory(Category.School), navigate("/school"), closeMenu();
        }}
        className={clsx(
          currentCategory === Category.School && "bg-white text-purple-700"
        )}
      >
        <FaBook /> Escola
      </CategoryItem>
    </ul>
  );
}

CategoryList.displayName = "CategoryList";
