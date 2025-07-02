import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { SidebarDesktop } from "./components/SidebarDesktop";

function App() {
  return (
    <>
      <Header />
      <main>
        <Sidebar />
        <SidebarDesktop />
      </main>
    </>
  );
}

export default App;
