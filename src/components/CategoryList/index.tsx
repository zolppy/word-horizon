import { useNavigate } from "react-router-dom";
import {
  FaBed,
  FaBook,
  FaDog,
  FaFaceSmile,
  FaHouse,
  FaKitchenSet,
  FaPerson,
  FaShirt,
  FaUserGroup,
} from "react-icons/fa6";
import { CategoryItem } from "../CategoryItem";
import { useMenu } from "../../contexts/MenuCtx";
import { Category } from "../../utils/enums/category";
import { usePathname } from "../../hooks/usePathname";

export function CategoryList() {
  const { closeMenu } = useMenu();
  const navigate = useNavigate();
  const { pathname } = usePathname(window.location.pathname);

  return (
    <ul className="mt-20 pl-4 flex flex-col gap-y-2 text-white lg:mt-0 lg:absolute lg:-translate-y-1/2 lg:top-1/2 w-full">
      <CategoryItem
        onClick={() => {
          navigate("/"), closeMenu();
        }}
        variant={pathname === "/" ? "selected" : "default"}
      >
        <FaHouse /> Home
      </CategoryItem>
      <CategoryItem
        onClick={() => {
          navigate("/animals"), closeMenu();
        }}
        variant={pathname === `/${Category.Animals}` ? "selected" : "default"}
      >
        <FaDog /> Animais
      </CategoryItem>
      <CategoryItem
        onClick={() => {
          navigate("/bedroom"), closeMenu();
        }}
        variant={pathname === `/${Category.Bedroom}` ? "selected" : "default"}
      >
        <FaBed /> Quarto
      </CategoryItem>
      <CategoryItem
        onClick={() => {
          navigate("/body"), closeMenu();
        }}
        variant={pathname === `/${Category.Body}` ? "selected" : "default"}
      >
        <FaPerson /> Corpo
      </CategoryItem>
      <CategoryItem
        onClick={() => {
          navigate("/clothes"), closeMenu();
        }}
        variant={pathname === `/${Category.Clothes}` ? "selected" : "default"}
      >
        <FaShirt /> Roupas
      </CategoryItem>
      <CategoryItem
        onClick={() => {
          navigate("/emotions"), closeMenu();
        }}
        variant={pathname === `/${Category.Emotions}` ? "selected" : "default"}
      >
        <FaFaceSmile /> Emoções
      </CategoryItem>
      <CategoryItem
        onClick={() => {
          navigate("/family"), closeMenu();
        }}
        variant={pathname === `/${Category.Family}` ? "selected" : "default"}
      >
        <FaUserGroup /> Família
      </CategoryItem>
      <CategoryItem
        onClick={() => {
          navigate("/kitchen"), closeMenu();
        }}
        variant={pathname === `/${Category.Kitchen}` ? "selected" : "default"}
      >
        <FaKitchenSet /> Cozinha
      </CategoryItem>
      <CategoryItem
        onClick={() => {
          navigate("/school"), closeMenu();
        }}
        variant={pathname === `/${Category.School}` ? "selected" : "default"}
      >
        <FaBook /> Escola
      </CategoryItem>
    </ul>
  );
}

CategoryList.displayName = "CategoryList";
