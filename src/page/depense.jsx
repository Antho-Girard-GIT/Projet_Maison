import { useState } from "react";
import { useDepenses } from "../context/DepensesContext";

export function Depense() {
  const { depenses, setDepenses } = useDepenses()
  const [montant, setMontant] = useState("");
  const [info, setInfo] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (!montant) return;
    setDepenses([...depenses, { montant: parseFloat(montant), info }]);
    setMontant("");
    setInfo("");
  };

  const total = depenses.reduce((acc, d) => acc + d.montant, 0);

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-zinc-100 rounded shadow">
      <form onSubmit={handleAdd} className="flex flex-col gap-4 mb-4">
        <input
          type="number"
          placeholder="Montant"
          value={montant}
          onChange={e => setMontant(e.target.value)}
          className="border rounded p-2"
          required
        />
        <input
          type="text"
          placeholder="Informations"
          value={info}
          onChange={e => setInfo(e.target.value)}
          className="border rounded p-2"
        />
        <button type="submit" className="bg-blue-500 text-white rounded p-2">Ajouter</button>
      </form>
      <div className="font-bold text-lg mb-2">
        Total des dépenses : {total.toFixed(2)} $
      </div>
      <div>
        <h3 className="font-semibold mb-2">Liste des dépenses :</h3>
        <ul className="space-y-1">
          {depenses.map((d, i) => (
            <li key={i} className="border-b py-1 flex justify-between">
              <span>{d.info || <span className="italic text-gray-400">Sans info</span>}</span>
              <span className="font-mono">{d.montant.toFixed(2)} $</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

