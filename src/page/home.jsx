import { useDepenses } from "../context/DepensesContext";
import { AchatList } from "../context/AchatList";
import { FaireList } from "../context/FaireList";
import { CommandeList } from "../context/CommandeList";


export function Home() {
  const { depenses } = useDepenses();
  const total = depenses.reduce((acc, d) => acc + d.montant, 0);

  return (
    <div className=" flex items-center justify-center">
      <div className="grid grid-cols-2 gap-4">
        <div className="card-body size-50 bg-zinc-300 flex flex-col rounded shadow">
          <h2 className="text-lg font-bold mb-2 underline text-center">Dépenses</h2>
          <span className="bg-zinc-500 m-auto size-35 text-center rounded text-xl font-extrabold p-5">
          {total} $
          </span>
        </div>
        <div className="card-body size-50 bg-zinc-300 flex flex-col rounded shadow overflow-hidden">
          <h2 className="text-lg font-bold mb-2 underline text-center">Achat</h2>
          <AchatList />
        </div>
        <div className="card-body size-50 bg-zinc-300 flex flex-col rounded shadow">
          <h2 className="text-lg font-bold mb-2 underline text-center">Commandes</h2>
          <CommandeList />
        </div>
        <div className="card-body size-50 bg-zinc-300 flex flex-col rounded shadow overflow-hidden">
          <h2 className="text-lg font-bold mb-2 underline text-center">À faire</h2>
          <FaireList />
        </div>
      </div>
    </div>
  )
}
