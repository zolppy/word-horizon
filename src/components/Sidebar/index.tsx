import { AnimatePresence, motion } from "framer-motion";
import { CategoryList } from "../CategoryList";
import { Btn } from "../Btn";
import { useMenu } from "../../contexts/MenuCtx";
import { FaXmark } from "react-icons/fa6";

export function Sidebar() {
  const { closeMenu, menuIsOpen } = useMenu();

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
            className="h-screen bg-[#151b23] fixed z-10 top-0 overflow-x-hidden border-e-[20px] border-[var(--primary-color)]"
          >
            <Btn
              onClick={closeMenu}
              className="text-2xl text-white absolute -translate-x-1/2 -translate-y-1/2 top-10 left-7"
            >
              <FaXmark />
            </Btn>
            <CategoryList />
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}

Sidebar.displayName = "Sidebar";
