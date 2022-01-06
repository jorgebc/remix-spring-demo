package com.demo.back.campaign;

import java.util.UUID;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Summary repository.
 */
@Repository
public interface SummaryRepository extends CrudRepository<Summary, UUID> {

}
