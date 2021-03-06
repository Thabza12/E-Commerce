package com.vico.Ecommerceapp.repository;

import com.vico.Ecommerceapp.entity.Cellphone;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
public interface CellphoneRepository extends JpaRepository<Cellphone, Long> {

    @RestResource(path = "manufacture-id")
    Page<Cellphone>findByManufactureId(@Param("id") Long id, Pageable pageable);

    @RestResource(path = "spec-id")
    Page<Cellphone> findBySpecId(@Param("id") Long Id, Pageable pageable);

}
