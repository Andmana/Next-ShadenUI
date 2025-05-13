"use client";

import { ImagePlus } from "lucide-react";
import { useRef, useState } from "react";
import { uploadImage } from "../../create/actions";

const ImageInput = ({ defaultImage = null }) => {
  const [isError, setIsError] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(defaultImage);
  const [imageUrl, setImageUrl] = useState(defaultImage || "");
  const fileInputRef = useRef(null);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type
    if (!file.type.match(/image\/(jpeg|png)/)) {
      setIsError("Only JPG or PNG files are allowed");
      return;
    }

    // Validate file size (e.g., 5MB max)
    if (file.size > 1 * 1024 * 1024) {
      setIsError("File size must be less than 1MB");
      return;
    }

    setPreview(URL.createObjectURL(file));
    setUploading(true);
    setIsError(null);

    try {
      // Create a new simple file object with just the essential data
      const fileForServer = new File([file], file.name, {
        type: file.type,
        lastModified: file.lastModified,
      });

      const response = await uploadImage(fileForServer);
      setIsError(null);
      setImageUrl(response.imageUrl); // Adjust according to your API response
      console.log("Upload successful:", response);
    } catch (error) {
      console.error("Upload error:", error);
      setIsError(error.message || "Upload failed. Please try again.");
      setPreview(null);
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = () => {
    setPreview(null);
    setImageUrl("");
    setIsError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-2">
      <div className="h-[163px] w-fit rounded-md p-3 border border-slate-300 border-dashed flex flex-col items-center justify-center cursor-pointer hover:border-blue-400 transition relative">
        {uploading && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-md">
            <span className="text-white">Uploading...</span>
          </div>
        )}

        {preview ? (
          <div className="flex flex-col gap-2">
            <img
              src={preview}
              alt="preview"
              className="w-[199px] h-[115px] rounded-md object-center object-cover"
            />
            <div className="flex justify-center gap-2.5 underline text-xs">
              <label
                htmlFor="file-upload"
                className="text-blue-600 cursor-pointer"
                disabled={uploading}
              >
                Change
              </label>
              <button
                type="button"
                className="text-red-500"
                onClick={handleDelete}
                disabled={uploading}
              >
                Delete
              </button>
            </div>
          </div>
        ) : (
          <label
            htmlFor="file-upload"
            className="flex flex-col items-center justify-center gap-3 text-center text-slate-500 cursor-pointer"
          >
            <ImagePlus size={20} />
            <div className="w-50 text-center">
              <p className="text-sm font-medium mb-1">Click to select files</p>
              <p className="text-xs text-gray-400">
                Support File Type: jpg or png (Max 5MB)
              </p>
            </div>
          </label>
        )}

        <input
          id="file-upload"
          type="file"
          accept="image/jpeg,image/png"
          className="hidden"
          onChange={handleImageChange}
          ref={fileInputRef}
          disabled={uploading}
        />
      </div>

      {isError && <p className="text-red-500 text-sm">{isError}</p>}

      {imageUrl && (
        <input
          type="text"
          name="imageUrl"
          value={imageUrl}
          readOnly
          className="w-full p-2 border rounded-md"
          placeholder="Image URL will appear here"
          hidden
        />
      )}
    </div>
  );
};

export default ImageInput;
