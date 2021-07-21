package com.vico.Ecommerceapp.repository;


import com.vico.Ecommerceapp.entity.Cellphone;
import com.vico.Ecommerceapp.entity.Spec;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "spec", path = "spec-view")
public interface SpecRepository extends JpaRepository<Spec, String> {

//    @RestResource(path = "{id}")
//    List<Spec> findById(@Param("id") String id, Pageable pageable);

   
}
