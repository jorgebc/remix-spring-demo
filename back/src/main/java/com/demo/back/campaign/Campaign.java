package com.demo.back.campaign;

import java.util.Collection;
import java.util.UUID;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import lombok.Data;

/**
 * Campaign jpa entity.
 */
@Data
@Entity
public class Campaign {

  @Id
  @Column(length = 16)
  @GeneratedValue(generator = "UUID")
  private UUID id;
  private String name;
  @Column(columnDefinition = "TEXT")
  private String description;
  private String imageUrl;
  private boolean actual;

  @OneToMany(mappedBy = "campaign", cascade = {CascadeType.ALL})
  private Collection<Summary> summaries;
}
