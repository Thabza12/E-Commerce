package com.vico.Ecommerceapp.repository;

import com.vico.Ecommerceapp.entity.Manufacture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
public interface ManufactureRepository extends JpaRepository<Manufacture, Long> {
}
