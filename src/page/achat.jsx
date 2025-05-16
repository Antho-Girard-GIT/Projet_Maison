import { useState } from "react";
import { useAchat } from "../context/AchatContext";
import { AchatList } from "../context/achatlist";

export function Achat() {
  const [achat, setAchat] = useState("");
  const { addAchat } = useAchat();

  const handleAdd = (e) => {
    e.preventDefault();
    if (!achat.trim()) return;
    addAchat(achat.trim());
    setAchat("");
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-zinc-100 rounded shadow">
      <form onSubmit={handleAdd} className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Ajouter un achat"
          value={achat}
          onChange={(e) => setAchat(e.target.value)}
          className="border rounded p-2 flex-1"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded px-4"
        >
          Ajouter
        </button>
      </form>
      <AchatList />
    </div>
  );
}
