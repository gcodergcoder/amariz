import { gql } from "@apollo/client";

const QOUTES = gql`
  query Query {
  findManyQoutes {
    id
    createdAt
    provider {
      name
    }
    agentProvider {
      name
      surName
    }
    qoutesDetails {
      price
      unit
    }
  }
}`

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
      id
      description
      price
      unit
    }
  }
}
`;

export { QOUTE_BY_ID, QOUTES };
