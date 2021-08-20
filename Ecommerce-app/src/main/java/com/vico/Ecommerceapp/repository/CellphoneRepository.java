package com.vico.Ecommerceapp.repository;

import com.vico.Ecommerceapp.entity.Cellphone;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;

@CrossOrigin(origins = "http://localhost:4200",
        methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE })
public interface CellphoneRepository extends JpaRepository<Cellphone, String> {

//    @RestResource(path = "manufacture-id")
//    Page<Cellphone>findByManufactureId(@Param("id") Long id, Pageable pageable);
//
//    @RestResource(path = "spec-id")
//    Page<Cellphone> findBySpecId(@Param("id") Long Id, Pageable pageable);
//
    @RestResource(path = "cellphone")
    Page<Cellphone> findById(@Param("id") String Id, Pageable pageable);

//    @RestResource(path = "update-cellphone")
//    Cellphone save(@Param("id") String Id, @RequestBody Cellphone cellphone);

    @RestResource(path = "delete")
    Page<Cellphone> deleteById(@Param("id") String Id, Pageable pageable);

//    @RestResource(path = "add")
//    Cellphone save(@RequestBody Cellphone cellphone);


//    @RestResource(exported = false)
//    void delete(String id);
}
