package com.demo.back.campaign;

import java.util.UUID;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import lombok.Data;

/**
 * Summary jpa entity.
 */
@Data
@Entity
public class Summary {

  @Id
  @Column(length = 16)
  @GeneratedValue(generator = "UUID")
  private UUID id;
  @Column(columnDefinition = "TEXT")
  private String body;

  @ManyToOne(fetch = FetchType.LAZY)
  private Campaign campaign;
}
