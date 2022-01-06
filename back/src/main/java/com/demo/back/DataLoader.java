package com.demo.back;

import com.demo.back.campaign.Campaign;
import com.demo.back.campaign.CampaignRepository;
import com.demo.back.campaign.Summary;
import com.demo.back.campaign.SummaryRepository;
import java.util.UUID;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

/**
 * Generates test data.
 */
@Component
public class DataLoader implements ApplicationRunner {

  private final CampaignRepository campaignRepository;
  private final SummaryRepository summaryRepository;

  public DataLoader(CampaignRepository campaignRepository, SummaryRepository summaryRepository) {
    this.campaignRepository = campaignRepository;
    this.summaryRepository = summaryRepository;
  }

  @Override
  public void run(ApplicationArguments args) throws Exception {
    Campaign campaign = new Campaign();
    campaign.setActual(true);
    campaign.setDescription("<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>");
    campaign.setId(UUID.randomUUID());
    campaign.setImageUrl("http://example.es/image");
    campaign.setName("Lorem ipsum");
    campaign = campaignRepository.save(campaign);

    Summary summary = new Summary();
    summary.setBody(
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia posuere iaculis. Cras ligula enim, vestibulum vel massa id, viverra viverra enim. Vestibulum tempor aliquet arcu, sit amet dapibus magna aliquet ornare. Mauris mattis fringilla ante, ac cursus magna. Donec bibendum magna ac elementum tempus. Pellentesque dapibus imperdiet felis eget malesuada. Donec laoreet, eros et rutrum dapibus, ligula enim maximus libero, in maximus nulla tellus non eros. Ut mattis sapien id blandit commodo. Vivamus ac feugiat risus. Donec nec massa ultrices, pellentesque turpis venenatis, commodo nisi. Curabitur aliquam ex mauris, id interdum lorem venenatis vel. Cras posuere non neque quis tincidunt. Donec lacinia odio feugiat risus imperdiet vulputate. Vestibulum consequat, diam et commodo tristique, purus tellus ornare quam, nec fringilla tellus massa vel ante.</p>"
            + "<p>Curabitur vel nulla a felis tristique elementum nec quis nulla. Proin velit turpis, blandit id ultricies a, tincidunt a mi. Aenean egestas enim ac arcu fringilla, eget hendrerit ligula ultricies. Aliquam vitae dui vitae nibh facilisis volutpat non vel est. Duis quis rhoncus sem. Ut rhoncus sapien et vehicula pulvinar. Maecenas semper luctus tristique.</p>");
    summary.setCampaign(campaign);
    summary.setId(UUID.randomUUID());
    summaryRepository.save(summary);
  }
}
