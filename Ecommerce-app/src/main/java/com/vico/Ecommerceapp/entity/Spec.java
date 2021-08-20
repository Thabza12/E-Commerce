package com.vico.Ecommerceapp.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "tbl_spec")
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Spec {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;
    private String model;
    private String operatingSystem;
    private String camera;
    private String video;
    private String sensors;
    private String memory;

    @OneToOne(cascade = CascadeType.ALL, mappedBy = "spec")
    private Cellphone cellphone;


}
