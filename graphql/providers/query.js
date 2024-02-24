import { gql } from "@apollo/client";

const LIST_PROVIDER = gql`
    query Query {
  findManyProviders {
    id
    name
    nit
    addredd
    updatedAt
    agentProvider {
      id
      name
      surName
      phone
      email
      createdAt
      updatedAt
    }
    createdAt
  }
}
`;

export { LIST_PROVIDER };
