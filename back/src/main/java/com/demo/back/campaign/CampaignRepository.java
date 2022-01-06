package com.demo.back.campaign;

import java.util.Optional;
import java.util.UUID;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Campaign jpa respository.
 */
@Repository
public interface CampaignRepository extends CrudRepository<Campaign, UUID> {

  Optional<Campaign> findByActual(boolean actual);

}
