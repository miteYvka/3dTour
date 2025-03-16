'use client'
import { useState } from "react";
import axios from "axios";

const TestRenders = () => {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) {
      setMessage("Пожалуйста, выберите файл!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      // Отправляем запрос на собственный API-маршрут
      const response = await axios.post("/api/renders", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Важно!
        },
      });

      if (response.status === 200) {
        const result = response.data;
        setMessage(`Файл успешно загружен! Base64: ${result.substring(0, 50)}...`);
      } else {
        setMessage("Ошибка при загрузке файла.");
      }
    } catch (error: any) {
      console.error(error.response?.data || error.message);
      setMessage("Произошла ошибка при отправке файла.");
    }
  };

  return (
    <div>
      <h2>Загрузка изображения</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button type="submit">Отправить</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default TestRenders;