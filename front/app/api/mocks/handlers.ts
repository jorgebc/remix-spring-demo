import {graphql} from 'msw'
import {Summary} from '~/api/campaign'

interface GetActualCampaignQuery {
  actualCampaign: {
    id: string
    name: string
    description: string
    imageUrl: string
    summaries: Summary[]
  }
}

export const handlers = [
  graphql.query<GetActualCampaignQuery>(
    'getActualCampaign',
    (req, res, ctx) => {
      return res(
        ctx.data({
          actualCampaign: {
            id: 'c597104c-daf7-4050-8119-c4eafe991b42',
            name: 'Lorem ipsum',
            description:
              '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>',
            imageUrl: 'http://example.es/image',
            summaries: [
              {
                id: '6cde46fb-2797-4813-91db-a6d3a4423db0',
                body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia posuere iaculis. Cras ligula enim, vestibulum vel massa id, viverra viverra enim. Vestibulum tempor aliquet arcu, sit amet dapibus magna aliquet ornare. Mauris mattis fringilla ante, ac cursus magna. Donec bibendum magna ac elementum tempus. Pellentesque dapibus imperdiet felis eget malesuada. Donec laoreet, eros et rutrum dapibus, ligula enim maximus libero, in maximus nulla tellus non eros. Ut mattis sapien id blandit commodo. Vivamus ac feugiat risus. Donec nec massa ultrices, pellentesque turpis venenatis, commodo nisi. Curabitur aliquam ex mauris, id interdum lorem venenatis vel. Cras posuere non neque quis tincidunt. Donec lacinia odio feugiat risus imperdiet vulputate. Vestibulum consequat, diam et commodo tristique, purus tellus ornare quam, nec fringilla tellus massa vel ante.</p><p>Curabitur vel nulla a felis tristique elementum nec quis nulla. Proin velit turpis, blandit id ultricies a, tincidunt a mi. Aenean egestas enim ac arcu fringilla, eget hendrerit ligula ultricies. Aliquam vitae dui vitae nibh facilisis volutpat non vel est. Duis quis rhoncus sem. Ut rhoncus sapien et vehicula pulvinar. Maecenas semper luctus tristique.</p>',
              },
            ],
          },
        }),
      )
    },
  ),
]
