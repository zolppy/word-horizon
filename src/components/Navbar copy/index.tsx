import { AnimatePresence, motion } from "framer-motion";
import { CategoryList } from "../CategoryList";
import { CategoryItem } from "../CategoryItem";
import { useNavbar } from "../../contexts/SidebarCtx";
import { FaHouse } from "react-icons/fa6";
import { FaDog } from "react-icons/fa6";
import { FaShirt } from "react-icons/fa6";
import { FaKitchenSet } from "react-icons/fa6";
import { FaBook } from "react-icons/fa6";
import { FaPerson } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import { FaBed } from "react-icons/fa6";

export function Navbar() {
  const { navbarIsOpen } = useNavbar();

  return (
    <AnimatePresence>
      {navbarIsOpen && (
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
            className="h-screen bg-green-500 fixed z-10 top-0 overflow-x-hidden"
          >
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
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
