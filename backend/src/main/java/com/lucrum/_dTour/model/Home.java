package com.lucrum._dTour.model;

import jakarta.persistence.*;

import java.util.List;
import java.util.UUID;

@Table(name = "home")
@Entity
public class Home {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String address;

    @OneToMany(mappedBy = "home", fetch = FetchType.LAZY)
    private List<Render> renders;

    @OneToMany(mappedBy = "home", fetch = FetchType.LAZY)
    private List<Point> points;

    private String user_id;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public List<Render> getRenders() {
        return renders;
    }

    public void setRenders(List<Render> renders) {
        this.renders = renders;
    }

    public List<Point> getPoints() {
        return points;
    }

    public void setPoints(List<Point> points) {
        this.points = points;
    }

    public String getUser_id() {
        return user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }
}
