// tslint:disable
// this is an auto generated file. This will be overwritten

export const getAction = `query GetAction($id: ID!) {
  getAction(id: $id) {
    id
    name
    price
  }
}
`;
export const listActions = `query ListActions(
  $filter: ModelActionFilterInput
  $limit: Int
  $nextToken: String
) {
  listActions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      price
    }
    nextToken
  }
}
`;
