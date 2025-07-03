import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { CategoryList } from "../CategoryList";
import { CategoryItem } from "../CategoryItem";
import { useMenu } from "../../contexts/MenuCtx";
import { useSidebar } from "../../contexts/SidebarCtx";
import { Category } from "../../utils/enums/category";
import { FaHouse } from "react-icons/fa6";
import { FaDog } from "react-icons/fa6";
import { FaShirt } from "react-icons/fa6";
import { FaKitchenSet } from "react-icons/fa6";
import { FaBook } from "react-icons/fa6";
import { FaPerson } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import { FaBed } from "react-icons/fa6";

export function Sidebar() {
  const { closeMenu, menuIsOpen } = useMenu();
  const { changeCategory, currentCategory } = useSidebar();

  return (
    <AnimatePresence>
      {menuIsOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="z-10 bg-black h-screen w-screen fixed left-0 top-0 lg:hidden"
          ></motion.div>
          <motion.nav
            initial={{ width: "0" }}
            animate={{ width: "300px" }}
            exit={{ width: "0" }}
            transition={{ type: "spring", duration: 1 }}
            className="h-screen bg-purple-700 fixed z-10 top-0 overflow-x-hidden"
          >
            <CategoryList>
              <CategoryItem
                onClick={() => {
                  changeCategory(Category.Home), closeMenu();
                }}
                className={clsx(
                  currentCategory === Category.Home &&
                    "bg-white text-purple-700"
                )}
              >
                <FaHouse /> Home
              </CategoryItem>
              <CategoryItem
                onClick={() => {
                  changeCategory(Category.Animals), closeMenu();
                }}
                className={clsx(
                  currentCategory === Category.Animals &&
                    "bg-white text-purple-700"
                )}
              >
                <FaDog /> Animais
              </CategoryItem>
              <CategoryItem
                onClick={() => {
                  changeCategory(Category.Body), closeMenu();
                }}
                className={clsx(
                  currentCategory === Category.Body &&
                    "bg-white text-purple-700"
                )}
              >
                <FaPerson /> Corpo
              </CategoryItem>
              <CategoryItem
                onClick={() => {
                  changeCategory(Category.Kitchen), closeMenu();
                }}
                className={clsx(
                  currentCategory === Category.Kitchen &&
                    "bg-white text-purple-700"
                )}
              >
                <FaKitchenSet /> Cozinha
              </CategoryItem>
              <CategoryItem
                onClick={() => {
                  changeCategory(Category.School), closeMenu();
                }}
                className={clsx(
                  currentCategory === Category.School &&
                    "bg-white text-purple-700"
                )}
              >
                <FaBook /> Escola
              </CategoryItem>
              <CategoryItem
                onClick={() => {
                  changeCategory(Category.Family), closeMenu();
                }}
                className={clsx(
                  currentCategory === Category.Family &&
                    "bg-white text-purple-700"
                )}
              >
                <FaUserGroup /> Família
              </CategoryItem>
              <CategoryItem
                onClick={() => {
                  changeCategory(Category.Bedroom), closeMenu();
                }}
                className={clsx(
                  currentCategory === Category.Bedroom &&
                    "bg-white text-purple-700"
                )}
              >
                <FaBed /> Quarto
              </CategoryItem>
              <CategoryItem
                onClick={() => {
                  changeCategory(Category.Clothes), closeMenu();
                }}
                className={clsx(
                  currentCategory === Category.Clothes &&
                    "bg-white text-purple-700"
                )}
              >
                <FaShirt /> Roupas
              </CategoryItem>
            </CategoryList>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}

Sidebar.displayName = "Sidebar";
