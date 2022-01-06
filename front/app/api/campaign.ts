import {gql} from 'graphql-request'

export type Campaign = {
  id: string
  name: string
  description: string
  imageUrl: string
  actual: boolean
  summaries: Summary[]
}

export type Summary = {
  id: string
  body: string
}

export const getActualCampaign = /* GraphQL */ `
  query getActualCampaign {
    actualCampaign {
      id
      name
      description
      imageUrl
      summaries {
        id
        body
      }
    }
  }
`
