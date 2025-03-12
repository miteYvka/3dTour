package com.lucrum._dTour.Service;

import com.lucrum._dTour.model.Render;
import com.lucrum._dTour.repository.RenderRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;
import java.util.Optional;
import java.util.UUID;

@Service
public class RenderService {

    private final RenderRepository renderRepository;

    public RenderService(RenderRepository renderRepository) {
        this.renderRepository = renderRepository;
    }

    // Метод для кодирования файла в Base64 и сохранения в базу
    public String encodeAndSaveRender(MultipartFile file) throws IOException {
        if (file == null || file.isEmpty()) {
            throw new IllegalArgumentException("Файл не может быть пустым.");
        }

        byte[] fileBytes = file.getBytes();
        String base64String = Base64.getEncoder().encodeToString(fileBytes);

        Render render = new Render();
        render.setRender(base64String);
        renderRepository.save(render);

        return base64String;
    }

    // Получение всех рендеров
    public Iterable<Render> findAll() {
        return renderRepository.findAll();
    }

    // Получение рендера по ID
    public Optional<Render> findById(UUID id) {
        return renderRepository.findById(id);
    }

    // Сохранение или обновление рендера
    public Render save(Render render) {
        return renderRepository.save(render);
    }

    // Проверка существования рендера по ID
    public boolean existsById(UUID id) {
        return renderRepository.existsById(id);
    }

    // Удаление рендера по ID
    public void deleteById(UUID id) {
        renderRepository.deleteById(id);
    }
}