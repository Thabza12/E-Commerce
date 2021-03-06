package com.vico.Ecommerceapp.entity;

import lombok.Data;
import lombok.ToString;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

@Entity
@Data
@Table(name = "tbl_cellphone")
@ToString
public class Cellphone {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String modelName;
    private String manufactureName;
//    private String description;

    @Column(name = "unit_price")
    private BigDecimal unitPrice;

    @Column(name = "image_url")
    private String imageUrl;

    @Column(name = "units_in_stock")
    private int unitsInStock;

    @Column(name = "date_created")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date createdOn;

    @Column(name = "last_update")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date updatedOn;


    @ManyToOne
    @JoinColumn(name = "manufacture_id", nullable = false)
    private Manufacture manufacture;

    @OneToOne
    @JoinColumn(name = "spec_id", nullable = false)
    private Spec spec;

}


