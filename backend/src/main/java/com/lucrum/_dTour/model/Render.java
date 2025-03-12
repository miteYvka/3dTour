package com.lucrum._dTour.model;

import jakarta.persistence.*;

import java.util.UUID;

@Table(name = "render")
@Entity
public class Render {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Lob
    private String render;

    @ManyToOne
    @JoinColumn(name = "home_id")
    private Home home;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getRender() {
        return render;
    }

    public void setRender(String render) {
        this.render = render;
    }

    public Home getHome() {
        return home;
    }

    public void setHome(Home home) {
        this.home = home;
    }
}
