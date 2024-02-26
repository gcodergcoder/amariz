import React from "react";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <title>Amariz Agency | SYS</title>
            <meta
                name="description"
                content="Trámites y reprogramación de citas"
            />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />

            <main className="flex items-center justify-center h-screen">
                <ul>
                    <li>
                        <Link href={"/client"}>
                            <span className="underline">provedores</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/qoutes"}>
                            <span className="underline ">cotizaciones</span>
                        </Link>
                    </li>
                </ul>
            </main>
        </>
    );
}
