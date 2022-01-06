import type {LoaderFunction} from 'remix'
import {useLoaderData, json} from 'remix'
import parse from 'html-react-parser'

import {getActualCampaign, Campaign} from '~/api/campaign'
import {graphQLClient} from '~/api/client'

type LoaderData = {actualCampaign: Campaign}

export const loader: LoaderFunction = async () => {
  const data = await graphQLClient.request<LoaderData>(getActualCampaign)
  return json(data)
}

export default function CampaignIndexRoute() {
  const data = useLoaderData<LoaderData>()

  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          {data.actualCampaign.name}
        </h3>
        {parse(data.actualCampaign.description)}
      </div>
      <div className="border-t border-gray-200">
        {data.actualCampaign.summaries.map(summary => (
          <div key={summary.id} className="px-4 py-5 bg-gray-50">
            {parse(summary.body)}
          </div>
        ))}
      </div>
    </div>
  )
}
