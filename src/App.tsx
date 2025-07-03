import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { SidebarDesktop } from "./components/SidebarDesktop";
import { Card } from "./components/Card";
import { CategoriaDestaque } from "./components/utils/mocks/dest";

function App() {
    return (
        <>
            <Header />
            <main>
                <Sidebar />
                <SidebarDesktop />

                <section>
                    <div className="">
                        {CategoriaDestaque.map(
                            ({ id, img1, descricao1, som1 }) => (
                                <Card
                                    key={id}
                                    img1={img1}
                                    descricao1={descricao1}
                                    som1={som1}
                                />
                            )
                        )}
                    </div>
                </section>
            </main>
        </>
    );
}

export default App;
