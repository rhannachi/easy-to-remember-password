'use client'

import { useState } from "react";
import { Generator } from "@/components";

export default function Page() {

  const [nb, setNb] = useState(1)

  return (
    <main className="flex min-h-screen flex-col p-24">
      <div className="text-white">
        <h1 className="">Vous en avez assez d`oublier vos mots de passe 😖😖😖</h1>
        <h1 className="mt-2" >Retenez tous vos mots de passe 😃!</h1>
        <p>C`est extrêmement facile 😄, générez-les à partir d`une suite d`emojis de votre choix 😎</p>
      </div>

      <div className="flex flex-col mt-5">
          {Array.from({ length: nb}).map((_, index) => (
              <Generator key={index} />
          ))}
      </div>

      <div className="mt-5">
          <button className="text-black" onClick={() => setNb((item)=> item + 1) } > + </button>
      </div>

    </main>
  )
}
