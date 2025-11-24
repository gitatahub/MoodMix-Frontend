import api from "./api";
import type { Playlist } from "../types/Playlist";

export async function createPlaylist(
  name: string,
  description?: string
): Promise<Playlist> {
  const response = await api.post<Playlist>("/playlist", { name, description });
  return response.data;
}

export async function getPlaylists(): Promise<Playlist[]> {
  const response = await api.get<Playlist[]>("/playlist");
  return response.data;
}

export async function getPlaylistById(playlistId: number): Promise<Playlist> {
  const response = await api.get<Playlist>(`/playlist/${playlistId}`);
  return response.data;
}

export async function uploadTrackToPlaylist(
  playlistId: number,
  file: File
): Promise<Playlist> {
  const formData = new FormData();
  formData.append("file", file);

  const response = await api.post<Playlist>(
    `/playlist/${playlistId}/upload-track`,
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  );

  return response.data;
}

export async function deletePlaylist(playlistId: number): Promise<void> {
  await api.delete(`/playlist/${playlistId}`);
}