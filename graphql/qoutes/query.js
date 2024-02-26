import { gql } from "@apollo/client";

const QOUTE_BY_ID = gql`
  query FindManyQoutes($where: QoutesWhereUniqueInput!) {
  findUniqueQoutes(where: $where) {
    id

    agentProvider {
      email
      name
      surName
      phone
    }
    createdAt
    provider {
      nit
      name
      address
    }
    qoutesDetails {
      description
      price
      unit
    }
  }
}
`;

export { QOUTE_BY_ID };
