package com.vico.Ecommerceapp.repository;

import com.vico.Ecommerceapp.entity.Cellphone;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
public interface CellphoneRepository extends JpaRepository<Cellphone, Long> {
}
