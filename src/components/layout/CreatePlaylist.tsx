import { useState } from "react";

export default function CreatePlaylist({
  onCreate,
}: {
  onCreate: (name: string, description: string) => void;
}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    onCreate(name, description);
    setName("");
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        placeholder="Playlist name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 rounded bg-zinc-800"
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="p-2 rounded bg-zinc-800"
      />
      <button className="bg-blue-600 px-4 rounded">Create</button>
    </form>
  );
}
