import { useState } from "react";
import { useFaire } from "../context/FaireContext";
import { FaireList } from "../context/FaireList";

export function Faire() {
  const [tache, setTache] = useState("");
  const { addTache } = useFaire();

  const handleAdd = (e) => {
    e.preventDefault();
    if (!tache.trim()) return;
    addTache(tache.trim());
    setTache("");
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-zinc-100 rounded shadow">
      <form onSubmit={handleAdd} className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Ajouter une tâche"
          value={tache}
          onChange={(e) => setTache(e.target.value)}
          className="border rounded p-2 flex-1"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded px-4"
        >
          Ajouter
        </button>
      </form>
      <FaireList />
    </div>
  );
}