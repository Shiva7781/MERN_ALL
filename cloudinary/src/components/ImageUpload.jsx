import React, { useState } from "react";
import axios from "axios";

const ImageUpload = () => {
  const [imageFile, setImageFile] = useState(null);
  const [url, setUrl] = useState("");
  const [uploadStatus, setUploadStatus] = useState("");

  const handleImageChange = (event) => {
    setImageFile(event.target.files[0]);
  };

  const handleImageUpload = async () => {
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", "chat_app");

    try {
      const { data } = await axios.post(
        `https://api.cloudinary.com/v1_1/shiva7781/image/upload`,
        formData
      );

      setUrl(data.secure_url);
      setUploadStatus("Image uploaded successfully");

      console.log("data:", data);
    } catch (err) {
      console.log("err:", err);
      setUploadStatus("Image upload failed");
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleImageUpload}>Upload Image</button>
      <div>
        {uploadStatus}
        {url && <img src={url} alt="Uploaded" />}
      </div>
    </div>
  );
};

export default ImageUpload;
