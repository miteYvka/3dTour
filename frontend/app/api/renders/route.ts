import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

// Пример эндпоинта для получения всех изображений из базы данных
export async function GET() {
  try {
    // Замените URL на ваш бэкенд-сервер с базой данных
    const response = await axios.get("http://localhost:8082/render");

    if (response.data && Array.isArray(response.data)) {
      return NextResponse.json(response.data); // Возвращаем массив изображений
    } else {
      return NextResponse.error();
    }
  } catch (error) {
    console.error("Ошибка при получении изображений:", error);
    return NextResponse.error();
  }
}

export async function POST(request: NextRequest) {
  try {
    // Получаем данные из входящего запроса
    const formData = await request.formData();

    // Перенаправляем запрос на внешний сервер
    const response = await axios.post("http://localhost:8082/render/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data", // Важно!
      },
    });

    // Возвращаем ответ от внешнего сервера клиенту
    return NextResponse.json(response.data, { status: response.status });
  } catch (error: any) {
    console.error(error.response?.data || error.message);

    // Возвращаем ошибку клиенту
    return NextResponse.json(
      { error: error.response?.data || "Произошла ошибка при отправке файла." },
      { status: error.response?.status || 500 }
    );
  }
}