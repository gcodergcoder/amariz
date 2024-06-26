
import 'react-toastify/dist/ReactToastify.css';
import "@/styles/globals.css";
import React from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { Layouth } from "../layouth/layouth"
import { Poppins } from 'next/font/google'

const openSans = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ["300", "400", "500", "700"]
  })

// local mode
const client = new ApolloClient({
    uri: "http://localhost:3000/api/graphql",
    cache: new InMemoryCache(),
});

// dev mode
// const client = new ApolloClient({
//     uri: "https://amariz-git-dev-gcoder-solutions-projects.vercel.app/api/graphql",
//     cache: new InMemoryCache(),
// });

// production mode
// const client = new ApolloClient({
//     uri: "https://amariz.vercel.app/api/graphql",
//     cache: new InMemoryCache(),
// });

export default function App({
    Component,
    pageProps: { session, ...pageProps },
}) {
    return (
        <main className={openSans.className}>
            <ApolloProvider client={client}>
                    <Layouth>
                        <Component {...pageProps} />
                    </Layouth>
            </ApolloProvider>
        </main>
    );
}
