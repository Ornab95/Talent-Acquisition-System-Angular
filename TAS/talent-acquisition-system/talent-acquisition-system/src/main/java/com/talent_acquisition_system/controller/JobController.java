package com.talent_acquisition_system.controller;

import com.talent_acquisition_system.model.Job;
import com.talent_acquisition_system.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/jobs")
public class JobController {

    @Autowired
    private JobRepository jobRepository;

    @PostMapping("/post")
    public ResponseEntity<Job> postJob(@RequestBody Job job) {
        Job savedJob = jobRepository.save(job);
        return ResponseEntity.ok(savedJob);
    }

    @GetMapping("/list")
    public ResponseEntity<List<Job>> getJobs() {
        List<Job> jobs = jobRepository.findAll();
        return ResponseEntity.ok(jobs);
    }
}
