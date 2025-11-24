import { useState } from "react";
import usePlaylists from "../../hooks/usePlaylists";

export default function UploadTrackToPlaylist({
  playlistId,
}: {
  playlistId: number;
}) {
  const { uploadTrack } = usePlaylists(); // ✅ use hook function
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);
    try {
      await uploadTrack(playlistId, file); // ✅ hook updates playlists automatically
      setFile(null);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col gap-2 p-4 bg-zinc-900 rounded-xl">
      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="text-sm"
      />
      <button
        onClick={handleUpload}
        disabled={uploading}
        className={`p-2 rounded text-white ${
          uploading ? "bg-gray-500" : "bg-green-500"
        }`}
      >
        {uploading ? "Uploading..." : "Upload Track"}
      </button>
    </div>
  );
}
