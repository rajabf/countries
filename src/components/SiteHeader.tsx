import { useState, useRef } from "react";
import { CountryObj } from "./countryObj";

const SiteHeader = () => {
  const [searchedCountry, setSearchedCountry] = useState<CountryObj[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchQuery = searchInputRef.current?.value || "";

    if (searchQuery.trim() === "") {
      return;
    }

    fetch(`https://restcountries.com/v3.1/name/${searchQuery}`)
      .then((res) => res.json())
      .then((data) => setSearchedCountry(data))
      .catch((err) => console.error(err.message));
  };

  return (
    <>
      <nav className="container py-3 flex justify-between">
        <a href="/">COUNTRIES</a>
        <form className="items-center flex gap-2" onSubmit={handleSubmit}>
          <input
            aria-current
            className="border"
            type="text"
            name="search"
            placeholder="Search for a country"
            ref={searchInputRef}
          />
          <button type="submit">ok</button>
        </form>
      </nav>

      {searchedCountry.length > 0 && (
        <div className="container flex flex-wrap">
          {searchedCountry.map((data, index) => (
            <div key={index} className="w-1/4 p-4">
              <a href="/" className="block relative rounded overflow-hidden">
                <img
                  className="object-cover object-center w-full h-full block"
                  src={data.flags.png}
                  alt={data.flags.alt}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-black text-md tracking-widest title-font mb-1">
                  {data.name.common}
                </h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SiteHeader;
