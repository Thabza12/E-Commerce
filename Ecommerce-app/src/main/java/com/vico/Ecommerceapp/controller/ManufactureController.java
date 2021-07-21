package com.vico.Ecommerceapp.controller;

import com.vico.Ecommerceapp.entity.Cellphone;
import com.vico.Ecommerceapp.entity.Manufacture;
import com.vico.Ecommerceapp.repository.CellphoneRepository;
import com.vico.Ecommerceapp.repository.ManufactureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/manufactures")
public class ManufactureController {

    @Autowired
    private ManufactureRepository manuRepo;

    @GetMapping("manufactures")
    public List<Manufacture> getAllManufactures() {
        return manuRepo.findAll();
    }

    @GetMapping("manufactures/{id}")
    public ResponseEntity<Manufacture> getManufactureById(@PathVariable(value = "id") Long id)
            throws Exception {
        Manufacture manufacture = manuRepo.findById(id)
                .orElseThrow(() -> new Exception("Cellphone not found for this id :: " + id));
        return ResponseEntity.ok().body(manufacture);
    }

    @RequestMapping(value = "/postManufacture", method = RequestMethod.POST)
    public Manufacture postManufacture(@ModelAttribute("manufacture") Manufacture manufacture) {
        return manuRepo.save(manufacture);
    }

    @PutMapping("/manufacture/{id}")
    public ResponseEntity<Manufacture> updateManufacture(@PathVariable(value = "id") Long id,
                                                         @RequestBody Manufacture manufacture) throws Exception {
        manufacture = manuRepo.findById(id)
                .orElseThrow(() -> new Exception("Manufacture not found for this id :: " + id));

        manufacture.setId(manufacture.getId());
        manufacture.setManufactureName(manufacture.getManufactureName());
        final Manufacture updatedManufacture = manuRepo.save(manufacture);
        return ResponseEntity.ok(updatedManufacture);
    }

    @DeleteMapping("/delete/{id}")
    public Map<String, Boolean> deleteManufacture(@PathVariable(value = "id") Long id)
            throws Exception {
        Manufacture manufacture = manuRepo.findById(id)
                .orElseThrow(() -> new Exception("Employee not found for this id :: " + id));

        manuRepo.delete(manufacture);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
