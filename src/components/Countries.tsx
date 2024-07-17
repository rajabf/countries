import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

export interface Country {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: {
      fra: {
        official: string;
        common: string;
      };
    };
  };
}

const Countries = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [screenEraser, setScreenEraser] = useState(false);
  const API_URL = `https://restcountries.com/v3.1/all?fields=name,flags`;

  if (screenEraser) {
    document.querySelector(".countryCard")?.classList.add("hidden");
  }

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.error(err.message));
  }, []);

  return (
    <Router>
      <div className="container flex flex-wrap justify-center countryCard">
        {countries.map((data, index) => (
          <div
            key={index}
            className="lg:w-1/4 md:w-1/3 p-4 border-b border-l bg-slate-100"
          >
            <Link
              to={`/${data.name.common}`}
              onClick={() => setScreenEraser(true)}
            >
              <img
                className="object-contain object-center w-full block"
                src={data.flags.png}
                alt={data.flags.alt}
              />
              <h3 className="text-black text-xl">{data.name.common}</h3>
            </Link>
          </div>
        ))}
      </div>
      <Routes>
        <Route path="/:id" element={<Child />} />
      </Routes>
    </Router>
  );
};

function Child() {
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}

export default Countries;
