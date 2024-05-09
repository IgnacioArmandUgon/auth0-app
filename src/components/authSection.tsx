"use client";

import { signIn, signOut, useSession } from "next-auth/react";

const AuthSection = () => {
  const { data } = useSession();

  return (
    <div className="fixed right-0 top-0 inline px-8 py-4">
      <div className="flex gap-4">
        {data && <span>¡Hola {data.user.name}!</span>}
        {!data ? (
          <button onClick={() => signIn()}>Iniciar sesión</button>
        ) : (
          <button onClick={() => signOut()}>Cerrar sesión</button>
        )}
      </div>
    </div>
  );
};

export default AuthSection;
