import { gql } from "@apollo/client";

const LIST_PROVIDER = gql`
    query Query {
  findManyProviders {
    id
    name
    nit
    address
    updatedAt
    agentProvider {
      id
      name
      surName
      phone
      email
      providerId
      createdAt
      updatedAt
    }
    createdAt
  }
}
`;

export { LIST_PROVIDER };
