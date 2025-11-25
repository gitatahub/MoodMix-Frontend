import { useState, useEffect } from "react";
import {
  getPlaylists,
  createPlaylist,
  uploadTrackToPlaylist,
  deletePlaylist,
} from "../services/playlistService";
import type { Playlist } from "../types/Playlist";

export default function usePlaylists() {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [selected, setSelected] = useState<Playlist | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    refreshPlaylists();
  }, []);

  const refreshPlaylists = async () => {
    setLoading(true);
    const data = await getPlaylists();
    setPlaylists(data);
    setLoading(false);
  };

  const addPlaylist = async (name: string, description?: string) => {
    const newPlaylist = await createPlaylist(name, description);
    setPlaylists((prev) => [...prev, newPlaylist]);
    return newPlaylist;
  };

  const uploadTrack = async (playlistId: number, file: File) => {
    const updated = await uploadTrackToPlaylist(playlistId, file);
    setPlaylists((prev) =>
      prev.map((p) => (p.id === updated.id ? updated : p))
    );
    return updated;
  };

  const removePlaylist = async (playlistId: number) => {
    await deletePlaylist(playlistId);
    setPlaylists((prev) => prev.filter((p) => p.id !== playlistId));
    if (selected?.id === playlistId) setSelected(null);
  };

  return {
    playlists,
    selected,
    setSelected,
    loading,
    refreshPlaylists,
    addPlaylist,
    uploadTrack,
    removePlaylist,
  };
}
