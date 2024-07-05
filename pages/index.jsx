import React from "react";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <title>Amariz Agency | SYS</title>
            {/* <meta name="viewport" content="width=device-width, initial-scale=0.1"/> */}
            <meta
                name="description"
                content="Trámites y reprogramación de citas"
            />
            <link rel="icon" href="/favicon.ico" />

            <main className="flex items-center justify-center h-screen">
                <ul>
                    <li>
                        <Link href={"/client"}>
                            <span className="underline">Clientes</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/quotes"}>
                            <span className="underline ">Cotizaciones</span>
                        </Link>
                    </li>
                </ul>
            </main>
        </>
    );
}
