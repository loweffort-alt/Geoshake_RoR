// eslint-disable-next-line no-unused-vars
import * as React from "react";

const LinkDenied = () => {
  return (
    <>
      <div className="p-5">
        <h1 className="text-2xl font-bold">Link Denegado!</h1>
        <p className="mb-3 text-gray-500">
          El link proporcionado no existe o no es compatible con esta web,
          intenta copiando la url y pegando estas rutas:
        </p>
        <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside">
          <li>/api/features</li>
          <li>/api/features?page=1&per_page=10</li>
          <li>/api/features?page=1&per_page=1000.</li>
          <li>/api/features?page=6&per_page=500</li>
        </ul>
        <p className="mt-3 text-gray-500">
          Recuerda que siempre tiene que empezar con{" "}
          <span className="text-lg font-medium">http://ip:puerto </span>
          por estar en un entorno local.
        </p>
      </div>
    </>
  );
};

export default LinkDenied;
