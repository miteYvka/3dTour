'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";

interface ImageData {
  id: number;
  render: string; // Поле с base64 изображения
}

const TestImage = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const response = await axios.get<ImageData[]>("/api/renders"); // Используем axios

        if (response.data && Array.isArray(response.data)) {
          setImages(response.data); // Устанавливаем список изображений
        } else {
          setError("Нет данных изображений.");
        }
      } catch (err: any) {
        setError(`Ошибка при загрузке изображений: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Список изображений</h1>
      {images.length > 0 ? (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
          {images.map((image) => (
            <div key={image.id} style={{ position: "relative" }}>
              <img
                src={`data:image/png;base64,${image.render}`}
                alt={`Изображение ${image.id}`}
                style={{ maxWidth: "200px", height: "auto", borderRadius: "8px" }}
              />
              <p style={{ textAlign: "center", marginTop: "8px" }}>ID: {image.id}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>Нет доступных изображений.</div>
      )}
    </div>
  );
};

export default TestImage;