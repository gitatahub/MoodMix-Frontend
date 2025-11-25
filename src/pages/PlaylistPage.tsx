import { useEffect, useState } from "react";
import { 
  getPlaylists,
  createPlaylist,
  uploadTrackToPlaylist 
} from "../services/playlistService";
import type { Playlist } from "../types/Playlist";

import CreatePlaylist from "../components/layout/CreatePlaylist";
import PlaylistList from "../components/layout/playlistList";
import UploadTrackToPlaylist from "../components/layout/UploadTrackToPlaylist";

export default function PlaylistsPage() {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [selected, setSelected] = useState<Playlist | null>(null);
  const [loading, setLoading] = useState(true);

  // Load playlists on mount
  useEffect(() => {
    load();
  }, []);

  async function load() {
    setLoading(true);
    const data = await getPlaylists();
    setPlaylists(data);
    setLoading(false);
  }

  async function handleCreate(name: string, description: string) {
    await createPlaylist(name, description);
    await load(); // refresh
  }

  async function handleUpload(playlistId: number, file: File) {
    await uploadTrackToPlaylist(playlistId, file);
    await load(); // refresh
  }

  if (loading) return <p>Loading playlists...</p>;

  return (
    <div className="p-6 flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Playlists</h1>

      <CreatePlaylist onCreate={handleCreate} />

      <PlaylistList 
        playlists={playlists} 
        selected={selected}
        onSelect={setSelected}
      />

      {selected && (
        <UploadTrackToPlaylist 
          playlistId={selected.id}
          playlistName={selected.name}
          onUpload={handleUpload}
        />
      )}
    </div>
  );
}
