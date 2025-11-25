import { useState } from "react";

export default function UploadTrackToPlaylist({
  playlistId,
  playlistName,
  onUpload,
}: {
  playlistId: number;
  playlistName: string;
  onUpload: (playlistId: number, file: File) => void;
}) {
  const [file, setFile] = useState<File | null>(null);

  function handleUpload() {
    if (!file) return;
    onUpload(playlistId, file);
    setFile(null);
  }

  return (
    <div className="flex flex-col gap-3 p-4 bg-zinc-900 rounded-xl">
      <h2 className="text-xl font-semibold">Upload to: {playlistName}</h2>

      {/* SELECT FILE BUTTON */}
      <label className="bg-zinc-800 p-2 rounded cursor-pointer text-center">
        Select File
        <input 
          type="file" 
          className="hidden"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
      </label>

      {/* SHOW SELECTED FILE NAME */}
      {file && (
        <p className="text-sm text-gray-300">
          Selected: <span className="font-semibold">{file.name}</span>
        </p>
      )}

      {/* UPLOAD BUTTON */}
      <button
        onClick={handleUpload}
        disabled={!file}
        className={`px-4 py-2 rounded ${
          file ? "bg-green-600" : "bg-gray-600 cursor-not-allowed"
        }`}
      >
        Upload
      </button>
    </div>
  );
}
