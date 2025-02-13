import React from "react";
import { Head } from "@inertiajs/react";

export default function Welcome() {
    return (
        <>
            <Head title="Welcome" />
            <div className="flex min-h-screen items-center justify-center bg-gray-100">
                <h1 className="text-4xl font-bold text-gray-800">
                    Welcome to My Laravel React App
                </h1>
            </div>
        </>
    );
}
