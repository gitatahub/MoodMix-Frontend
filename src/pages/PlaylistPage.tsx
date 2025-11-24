import usePlaylists from "../hooks/usePlaylists";
import CreatePlaylist from "../components/layout/CreatePlaylist";
import UploadTrackToPlaylist from "../components/layout/UploadTrackToPlaylist";

export default function PlaylistsPage() {
  const { playlists, selected, setSelected, loading } = usePlaylists();

  if (loading) return <p>Loading playlists...</p>;

  return (
    <div className="p-6 flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Playlists</h1>

      <CreatePlaylist />

      <div className="flex gap-2 flex-wrap">
        {playlists.map((p) => (
          <div
            key={p.id}
            onClick={() => setSelected(p)}
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

      {selected && (
        <div>
          <h2 className="text-xl font-semibold mt-4">
            Upload to: {selected.name}
          </h2>
          <UploadTrackToPlaylist playlistId={selected.id} />
        </div>
      )}
    </div>
  );
}
