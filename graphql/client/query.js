import { gql } from "@apollo/client";

const LIST_CLIENT = gql`
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

export { LIST_CLIENT };
