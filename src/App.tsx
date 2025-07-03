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
        <section>
          <div>
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
