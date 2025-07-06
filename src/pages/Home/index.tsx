import { useNavigate } from "react-router-dom";
import { useSidebar } from "../../contexts/SidebarCtx";
import { Card } from "../../components/Card";
import { Categorias } from "../../utils/data/categorias";
import { Category } from "../../utils/enums/category";

export default function Home() {
  const { changeCategory } = useSidebar();
  const navigate = useNavigate();
  const paths = [
    "/animals",
    "/bedroom",
    "/body",
    "/clothes",
    "/emotions",
    "/family",
    "/kitchen",
    "/school",
  ];
  const selectedCategory = [
    Category.Animals,
    Category.Bedroom,
    Category.Body,
    Category.Clothes,
    Category.Emotions,
    Category.Family,
    Category.Kitchen,
    Category.School,
  ];

  return (
    <section className="flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 items-center justify-center gap-8 w-[90%] md:grid-cols-2 md:w-[85%] lg:grid-cols-4 lg:w-[90%]">
        {Categorias.map(({ id, img, titulo }, index) => (
          <Card
            key={id}
            img={img}
            titulo={titulo}
            onClick={() => {
              navigate(paths[index]), changeCategory(selectedCategory[index]);
            }}
          />
        ))}
      </div>
    </section>
  );
}

Home.displayName = "Home";
