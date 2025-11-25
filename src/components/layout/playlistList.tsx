import type { Playlist } from "../../types/Playlist";

export default function PlaylistList({
  playlists,
  selected,
  onSelect,
}: {
  playlists: Playlist[];
  selected: Playlist | null;
  onSelect: (p: Playlist) => void;
}) {
  return (
    <div className="flex gap-2 flex-wrap">
      {playlists.map((p) => (
        <div
          key={p.id}
          onClick={() => onSelect(p)}
          className={`p-3 rounded-xl cursor-pointer ${
            selected?.id === p.id ? "bg-blue-700" : "bg-zinc-800"
          }`}
        >
          <p className="font-semibold">{p.name}</p>
          <p className="text-sm text-gray-400">
            {p.tracks?.length || 0} tracks
          </p>
        </div>
      ))}
    </div>
  );
}
