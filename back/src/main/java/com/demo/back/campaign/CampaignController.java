package com.demo.back.campaign;

import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

/**
 * Campaign controller.
 */
@Controller
public class CampaignController {

  private final CampaignService campaignService;

  public CampaignController(CampaignService campaignFacade) {
    this.campaignService = campaignFacade;
  }

  @QueryMapping
  public Campaign actualCampaign() {
    return campaignService.findActualCampaign();
  }
}
