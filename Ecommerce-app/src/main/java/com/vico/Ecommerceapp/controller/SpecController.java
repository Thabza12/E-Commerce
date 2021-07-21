package com.vico.Ecommerceapp.controller;

import com.vico.Ecommerceapp.entity.Cellphone;
import com.vico.Ecommerceapp.entity.Manufacture;
import com.vico.Ecommerceapp.entity.Spec;
import com.vico.Ecommerceapp.repository.CellphoneRepository;
import com.vico.Ecommerceapp.repository.SpecRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/specs")
public class SpecController {

    @Autowired
    private SpecRepository specRepo;

    @GetMapping("/specs")
    public List<Spec> getAllSpecs() {
        return specRepo.findAll();
    }

    @GetMapping("/specs/{id}")
    public ResponseEntity<Spec> getSpecById(@PathVariable(value = "id") String id)
            throws Exception {
        Spec spec = specRepo.findById(id)
                .orElseThrow(() -> new Exception("Cellphone not found for this id :: " + id));
        return ResponseEntity.ok().body(spec);
    }

    @RequestMapping(value = "/postSpec", method = RequestMethod.POST)
    public Spec postSpec(@ModelAttribute("spec") Spec spec) {
        return specRepo.save(spec);
    }

    @PutMapping("/specs/{id}")
    public ResponseEntity<Spec> updateSpec(@PathVariable(value = "id") String id,
                                                   @RequestBody Spec spec) throws Exception {
        spec = specRepo.findById(id)
                .orElseThrow(() -> new Exception("Employee not found for this id :: " + id));

        spec.setId(spec.getId());
        spec.setModel(spec.getModel());
        spec.setOperatingSystem(spec.getOperatingSystem());
        spec.setCamera(spec.getCamera());
        spec.setVideo(spec.getVideo());
        spec.setMemory(spec.getMemory());
        spec.setSensors(spec.getSensors());
        final Spec updatedSpec = specRepo.save(spec);
        return ResponseEntity.ok(updatedSpec);
    }

    @DeleteMapping("/delete/{id}")
    public Map<String, Boolean> deleteSpec(@PathVariable(value = "id") String id)
            throws Exception {
        Spec spec = specRepo.findById(id)
                .orElseThrow(() -> new Exception("Employee not found for this id :: " + id));

        specRepo.delete(spec);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

}
