package com.vico.Ecommerceapp.entity;

import lombok.Data;
import lombok.ToString;

import javax.persistence.*;
import java.util.Set;

@Data
@Entity
@Table(name = "tbl_manufacture")
@ToString
public class Manufacture {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "manufacture_name")
    private String manufactureName;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "manufacture")
    private Set<Cellphone> cellphone;
}
