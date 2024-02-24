import { gql } from "@apollo/client";

const CREATE_PROVIDER = gql`
    mutation Mutation($data: ProvidersCreateInput!) {
        createOneProviders(data: $data) {
            name
            nit
            addredd
        }
    }
`;

const UPDATE_PROVIDER = gql`
    mutation Mutation(
        $data: ProvidersUpdateInput!
        $where: ProvidersWhereUniqueInput!
    ) {
        updateOneProviders(data: $data, where: $where) {
            id
        }
    }
`;

const UPDATE_AGENT = gql`
    mutation Mutation(
        $data: AgentProviderUpdateInput!
        $where: AgentProviderWhereUniqueInput!
    ) {
        updateOneAgentProvider(data: $data, where: $where) {
            id
        }
    }
`;

const CREATE_AGENT = gql`
    mutation Mutation($data: AgentProviderCreateInput!) {
        createOneAgentProvider(data: $data) {
            name
            surName
            email
            phone
            provider {
                id
            }
        }
    }
`;

export { CREATE_PROVIDER, CREATE_AGENT, UPDATE_PROVIDER, UPDATE_AGENT };