package com.demo.back.campaign;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.graphql.tester.AutoConfigureWebGraphQlTester;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.graphql.test.tester.WebGraphQlTester;

@SpringBootTest
@AutoConfigureWebGraphQlTester
class CampaignControllerTest {

  @Autowired
  private WebGraphQlTester graphQlTester;

  @Test
  void getActualCampaign() {
    this.graphQlTester.query("query actualCampaign { actualCampaign { id summaries { id } } }")
        .execute().path("actualCampaign").entity(Campaign.class)
        .satisfies(campaign -> assertThat(campaign.getSummaries()).hasSize(1));
  }
}
