
import 'react-toastify/dist/ReactToastify.css';
import "@/styles/globals.css";
import React from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { Layouth } from "../layouth/layouth"

// local mode
const client = new ApolloClient({
    uri: "http://localhost:3000/api/graphql",
    cache: new InMemoryCache(),
});

// dev mode
// const client = new ApolloClient({
//     uri: "https://pronto-git-dev-gustavodearmas-s-team.vercel.app/api/graphql",
//     cache: new InMemoryCache(),
// });

// production mode
// const client = new ApolloClient({
//     uri: "https://pronto-col.vercel.app/api/graphql",
//     cache: new InMemoryCache(),
// });

export default function App({
    Component,
    pageProps: { session, ...pageProps },
}) {
    return (
        <main>
            <ApolloProvider client={client}>
                    <Layouth>
                        <Component {...pageProps} />
                    </Layouth>
            </ApolloProvider>
        </main>
    );
}
