import { useState } from "react";
import data from "../../data.json";
import Slider from "./Slider";
import Attribution from "./Attribution";

const ExtensionsList = () => {
  const filters = ["All", "Active", "Inactive", "Restore"];

  const [extensions, setExtensions] = useState(data);
  const [extensionStates, setExtensionStates] = useState(
    extensions.map((ext) => ext.isActive), // ambil nilai isActive dari state extensions
  );

  // handler toggle berdasarkan index yang didapat dari Slider
  function toggleExtension(index) {
    setExtensionStates((prev) =>
      prev.map((state, idx) => (idx === index ? !state : state)),
    );
  }

  return (
    <section className="py-8">
      {/* header */}
      <header className="mb-8 flex flex-col items-center justify-center space-y-3">
        <h1 className="text-title text-[32px] font-bold">Extensions List</h1>

        <div className="text-title space-x-2">
          {filters.map((filter, index) => {
            return (
              <button
                key={index + 1}
                className="bg-card-filter border-toggle-inactive cursor-pointer rounded-full border px-4 py-2"
              >
                {filter}
              </button>
            );
          })}
        </div>
      </header>
      {/* ./ header */}

      {/* content */}
      <section className="grid gap-4">
        {extensions.map((extension, index) => {
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
                  className="border-toggle-inactive text-title cursor-pointer rounded-full border px-3 py-1 text-sm font-semibold"
                  aria-label={`Remove ${extension.name}`}
                >
                  Remove
                </button>
                <Slider
                  extension={extensionStates[index]}
                  onToggle={() => toggleExtension(index)}
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
