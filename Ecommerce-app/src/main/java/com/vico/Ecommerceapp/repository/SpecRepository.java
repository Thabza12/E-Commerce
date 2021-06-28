package com.vico.Ecommerceapp.repository;


import com.vico.Ecommerceapp.entity.Cellphone;
import com.vico.Ecommerceapp.entity.Spec;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin("http://localhost:4200")
public interface SpecRepository extends JpaRepository<Spec, Long> {

    @RestResource(path = "cellphone-id")
    List<Spec> findByCellphoneId(@Param("id") Long id, Pageable pageable);

   
}
