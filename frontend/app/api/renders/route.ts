import { NextResponse } from "next/server";
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