"use client";

import { ImagePlus } from "lucide-react";
import { useRef, useState } from "react";

const ImageInput = () => {
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    }
  };

  const handleDelete = () => {
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = null; // ✅ Clear input so same file can be re-uploaded
    }
  };

  return (
    <div className="h-[163px] w-fit rounded-md p-3 border border-slate-300 border-dashed flex flex-col items-center justify-center cursor-pointer hover:border-blue-400 transition">
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
            >
              Change
            </label>
            <button
              type="button"
              className="text-red-500"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      ) : (
        <label
          htmlFor="file-upload"
          className="flex flex-col items-center justify-center gap-3 text-center text-slate-500"
        >
          <ImagePlus size={20} />
          <div className="w-50 text-center">
            <p className="text-sm font-medium mb-1">Click to select files</p>
            <p className="text-xs text-gray-400">
              Support File Type: jpg or png
            </p>
          </div>
        </label>
      )}

      <input
        id="file-upload"
        type="file"
        accept=".jpg,.png"
        className="hidden"
        onChange={handleImageChange}
        ref={fileInputRef} // ✅ Track input for clearing
      />
    </div>
  );
};

export default ImageInput;
