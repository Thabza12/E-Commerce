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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200",
        methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE })
//@RepositoryRestResource(collectionResourceRel = "specs", path = "spec-view")
public interface SpecRepository extends JpaRepository<Spec, String> {

    @RestResource(path = "spec-view-details")
    Page<Spec> findById(@Param("id") String id, Pageable pageable);

    @RestResource(path = "add")
    Spec save(@RequestBody Spec spec);


}
