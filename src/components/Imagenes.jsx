import { useEffect, useState } from "react";
import axios from "axios";

export default function Imagenes() {
  const [imagen, setImagen] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://picsum.photos/v2/list?page=1&limit=12");
        setImagen(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {imagen.length > 0 ? (
        imagen.map((img) => (
          <div
            key={img.id}
            className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition"
          >
            <img
              src={img.download_url}
              alt={img.author}
              className="w-full h-48 object-cover"
            />
            <div className="p-2 bg-white text-center text-sm font-medium">
              {img.author}
            </div>
          </div>
        ))
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

