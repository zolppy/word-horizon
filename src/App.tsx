import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { SidebarDesktop } from "./components/SidebarDesktop";
import { Card } from "./components/Card";
import { Categorias } from "./utils/data/categorias";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <SidebarDesktop />
      <main className="lg:ml-[300px] p-4 mt-20">
        <section className="flex flex-col items-center justify-center">
          <div className="grid grid-cols-1 items-center justify-center gap-8 w-[90%] md:grid-cols-2 md:w-[85%] lg:grid-cols-4 lg:w-[90%]">
            {Categorias.map(({ id, img, titulo }) => (
              <Card key={id} img={img} titulo={titulo} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
