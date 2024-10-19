package com.talent_acquisition_system.repository;

import com.talent_acquisition_system.model.Job;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface JobRepository extends MongoRepository<Job, String> {
}
