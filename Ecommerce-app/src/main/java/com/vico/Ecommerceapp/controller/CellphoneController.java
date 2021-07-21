package com.vico.Ecommerceapp.controller;

import com.vico.Ecommerceapp.entity.Cellphone;
import com.vico.Ecommerceapp.entity.Spec;
import com.vico.Ecommerceapp.repository.CellphoneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/cellphones")
public class CellphoneController {



    @Autowired
    private CellphoneRepository repository;

    @GetMapping("/cellphones")
    public List<Cellphone> getAllCellphones() {
        return repository.findAll();
    }

    @GetMapping(value= "/cellphones/{id}")
    public ResponseEntity<Cellphone> getCellphoneById(@PathVariable(value = "id") Long id)
            throws Exception {
        Cellphone cellphone = repository.findById(id)
                .orElseThrow(() -> new Exception("Cellphone not found for this id :: " + id));
        return ResponseEntity.ok().body(cellphone);
    }

    @RequestMapping(value = "/postCellphone", method = RequestMethod.POST)
    public Cellphone postCellphone(@ModelAttribute("cellphone") Cellphone cellphone) {
        return repository.save(cellphone);
    }

    @PutMapping("/cellphones/{id}")
    public ResponseEntity<Cellphone> updateCellphone(@PathVariable(value = "id") Long id,
                                                   @RequestBody Cellphone cellphone) throws Exception {
        cellphone = repository.findById(id)
                .orElseThrow(() -> new Exception("Employee not found for this id :: " + id));

        cellphone.setModelName(cellphone.getModelName());
        cellphone.setId(cellphone.getId());
        cellphone.setManufactureName(cellphone.getManufactureName());
        cellphone.setUnitPrice(cellphone.getUnitPrice());
        cellphone.setUnitsInStock(cellphone.getUnitsInStock());
        cellphone.setImageUrl(cellphone.getImageUrl());
        cellphone.setCreatedOn(cellphone.getCreatedOn());
        cellphone.setUpdatedOn(cellphone.getUpdatedOn());
        final Cellphone updatedCellphone = repository.save(cellphone);
        return ResponseEntity.ok(updatedCellphone);
   }

    @DeleteMapping("/delete/{id}")
    public Map<String, Boolean> deleteEmployee(@PathVariable(value = "id") Long id)
            throws Exception {
        Cellphone cellphone = repository.findById(id)
                .orElseThrow(() -> new Exception("Employee not found for this id :: " + id));

        repository.delete(cellphone);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
