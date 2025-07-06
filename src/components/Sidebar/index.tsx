import { AnimatePresence, motion } from "framer-motion";
import { CategoryList } from "../CategoryList";
import { useMenu } from "../../contexts/MenuCtx";

export function Sidebar() {
  const { menuIsOpen } = useMenu();

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
            <CategoryList />
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}

Sidebar.displayName = "Sidebar";
