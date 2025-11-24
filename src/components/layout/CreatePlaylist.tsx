import { useState } from "react";
import usePlaylists from "../../hooks/usePlaylists";

export default function CreatePlaylist() {
  const { addPlaylist } = usePlaylists(); // ✅ use hook function
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [creating, setCreating] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setCreating(true);
    try {
      await addPlaylist(name, description); // ✅ hook adds and updates state
      setName("");
      setDescription("");
    } finally {
      setCreating(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 p-4 bg-zinc-900 rounded-xl"
    >
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
      <button
        type="submit"
        disabled={creating}
        className={`p-2 rounded text-white ${
          creating ? "bg-gray-500" : "bg-blue-500"
        }`}
      >
        {creating ? "Creating..." : "Create Playlist"}
      </button>
    </form>
  );
}
