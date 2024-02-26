import { gql } from "@apollo/client";

const CREATE_QOUTES = gql`
    mutation Mutation($data: QoutesCreateInput!) {
        createOneQoutes(data: $data) {
            id
        }
    }
`;

const UPDATE_QOUTES = gql`
    mutation UpdateOneQoutes(
        $data: QoutesUpdateInput!
        $where: QoutesWhereUniqueInput!
    ) {
        updateOneQoutes(data: $data, where: $where) {
            id
        }
    }
`;

const CREATE_QDETAIL = gql`
    mutation CreateOneQoutesDetails($data: QoutesDetailsCreateInput!) {
        createOneQoutesDetails(data: $data) {
            id
        }
    }
`;

const UPDATE_QDETAIL = gql`
    mutation UpdateOneQoutes(
        $data: QoutesUpdateInput!
        $where: QoutesWhereUniqueInput!
    ) {
        updateOneQoutes(data: $data, where: $where) {
            id
        }
    }
`;

export { CREATE_QOUTES, UPDATE_QOUTES, CREATE_QDETAIL };
