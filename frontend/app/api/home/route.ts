import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // Получаем FormData из запроса
    const formData = await request.formData();

    // Отправляем данные на сервер Spring
    const response = await fetch("http://localhost:8082/home", {
      method: "POST",
      body: formData, // Передаем FormData напрямую
    });

    if (response.ok) {
      const data = await response.json();
      return NextResponse.json(data, { status: 201 });
    } else {
      const errorData = await response.text(); // Получаем текст ошибки
      return NextResponse.json({ error: errorData }, { status: response.status });
    }
  } catch (error: any) {
    console.error("Error sending data to Spring server:", error.message);
    return NextResponse.json({ error: "Failed to send data to the server" }, { status: 500 });
  }
}