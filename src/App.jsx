import ExtensionsList from "./components/ExtensionsList";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="p-4 lg:px-14 lg:py-8 xl:px-24 xl:py-12 2xl:mx-auto 2xl:max-w-[1440px]">
      <NavBar />
      <ExtensionsList />
    </div>
  );
}

export default App;
