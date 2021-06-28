package com.vico.Ecommerceapp.entity;

import lombok.Data;
import lombok.ToString;

import javax.persistence.*;
import java.util.Set;

@Entity
@Data
@Table(name = "tbl_spec")
@ToString
public class Spec {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String model;
//    private String manufacture;
    private String operatingSystem;
    private String camera;
    private String video;
    private String sensors;
    private String memory;

    @OneToOne(cascade = CascadeType.ALL, mappedBy = "spec")
    private Cellphone cellphone;


}
