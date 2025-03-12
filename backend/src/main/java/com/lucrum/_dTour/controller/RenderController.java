package com.lucrum._dTour.controller;

import com.lucrum._dTour.Service.RenderService;
import com.lucrum._dTour.model.Render;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/render")
@CrossOrigin(origins = "*")
public class RenderController {

    private final RenderService renderService;

    public RenderController(RenderService renderService) {
        this.renderService = renderService;
    }

    // Получение всех рендеров
    @GetMapping
    public ResponseEntity<Iterable<Render>> getRenders() {
        Iterable<Render> renders = renderService.findAll();
        return ResponseEntity.ok(renders);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Render> getRenderById(@PathVariable UUID id) {
        return renderService.findById(id)
                .map(value -> ResponseEntity.ok(value)) // Если значение найдено, возвращаем OK
                .orElse(ResponseEntity.notFound().build()); // Иначе возвращаем 404
    }

    // Создание нового рендера
    @PostMapping
    public ResponseEntity<Render> postRender(@RequestBody Render obj) {
        Render savedRender = renderService.save(obj);
        return new ResponseEntity<>(savedRender, HttpStatus.CREATED);
    }

    // Обновление рендера
    @PutMapping("/{id}")
    public ResponseEntity<Render> putRender(@PathVariable UUID id, @RequestBody Render obj) {
        if (!renderService.existsById(id)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Render updatedRender = renderService.save(obj);
        return new ResponseEntity<>(updatedRender, HttpStatus.OK);
    }

    // Удаление рендера
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRender(@PathVariable UUID id) {
        if (!renderService.existsById(id)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        renderService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Загрузка файла и сохранение его как рендера
    @PostMapping("/upload")
    public ResponseEntity<String> uploadRender(@RequestParam("file") MultipartFile file) {
        try {
            String base64String = renderService.encodeAndSaveRender(file);
            return ResponseEntity.ok("Base64: " + base64String);
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Ошибка при чтении файла: " + e.getMessage());
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}