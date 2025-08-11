import { useState } from "react";
import data from "../../data.json";
import Slider from "./Slider";
import Attribution from "./Attribution";

const ExtensionsList = () => {
  const filters = ["All", "Active", "Inactive"];

  const [extensions, setExtensions] = useState(data);
  const [activeFilter, setActiveFilter] = useState("All"); // state untuk menyimpan filter yang aktif

  const filteredExtensions = extensions.filter((ext) => {
    if (activeFilter === "All") return ext;
    if (activeFilter === "Active") return ext.isActive;
    if (activeFilter === "Inactive") return !ext.isActive;
  });

  function handlerSetActiveFilter(value) {
    setActiveFilter(value);
  }

  function handlerStatusExtension(value) {
    /*
    1. panggil setExtensions
    2. cek apakah nilai prevState (value state saat ini) di property isActive value nya berubah?
    3. kalau berubah, maka cukup ubah value isActive nya aja
    4. kalau ga berubah, kembalikan data nya
     */

    setExtensions((prevState) => {
      return prevState.map((item) => {
        return item.name === value
          ? { ...item, isActive: !item.isActive }
          : item;
      });
    });
  }

  function deleteExtension(value) {
    /*
    1. panggil setExtensions
    2. cek apakah nilai prevState di extension nya yaitu property extension.name ada atau ngga?
    3. kembalikan data yang tidak cocok dengan nilai parameter nya
     */

    setExtensions((prevState) => {
      return prevState.filter((item) => {
        return item.name !== value;
      });
    });
  }

  return (
    <section className="py-8">
      {/* header */}
      <header className="mb-8 flex flex-col items-center justify-center space-y-3 md:flex-row md:justify-between">
        <h1 className="text-title text-[32px] font-bold">Extensions List</h1>

        <div className="text-title space-x-2">
          {filters.map((filter, index) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={index + 1}
                onClick={() => handlerSetActiveFilter(filter)}
                className={`focus-state border-toggle-inactive cursor-pointer rounded-full border px-4 py-2 font-medium ${isActive ? "text-background bg-toggle-active hover:opacity-100" : "bg-card-filter text-title"} duration-300 hover:opacity-50`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </header>
      {/* ./ header */}

      {/* content */}
      <section className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-4">
        {filteredExtensions.map((extension, index) => {
          const extIsActive = extension.isActive;
          return (
            <article
              className="bg-card-filter space-y-7 rounded-2xl p-4 shadow-sm"
              key={index + 1}
            >
              {/* top section card */}
              <header className="flex items-start justify-between gap-4">
                <img src={extension.logo} alt={`${extension.name} logo`} />
                <div>
                  <h2 className="text-title mb-1.5 text-xl font-bold">
                    {extension.name}
                  </h2>
                  <p className="text-subheading">{extension.description}</p>
                </div>
              </header>
              {/* ./ top section card */}

              {/* footer card */}

              <footer className="flex items-center justify-between">
                <button
                  className="border-toggle-inactive text-title hover:bg-toggle-active hover:text-background focus-state cursor-pointer rounded-full border px-3 py-1 text-sm font-semibold duration-300"
                  aria-label={`Remove ${extension.name}`}
                  onClick={() => deleteExtension(extension.name)}
                >
                  Remove
                </button>
                <Slider
                  extension={extIsActive}
                  onToggle={() => handlerStatusExtension(extension.name)}
                />
              </footer>

              {/* ./ footer card */}
            </article>
          );
        })}
      </section>
      {/* ./ content */}

      <Attribution />
    </section>
  );
};

export default ExtensionsList;
