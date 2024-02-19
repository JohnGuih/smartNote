"use client"

import Link from "next/link";
import NoteMiniature from "./noteMiniature";
import { MdAddCircle, MdAddCircleOutline } from "react-icons/md";
import { useEffect, useState } from "react";
import getUserNotes from "@/api/getUserNotes";

const DashboardPage = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        console.log("fetching notes");
        getUserNotes()
            .then((response) => {
                setNotes(response.notes);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [])

    return (
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 justify-items-center align-items-center">
            {notes && notes.map((note, index) => {
                return <NoteMiniature key={index} note={note} />
            })}
            <Link href="/dashboard/note" className="w-72 h-40 rounded-lg border-4 border-dotted p-2 overflow-hidden flex justify-center items-center">
                <h1 className="text-2xl flex flex-row gap-2">
                    Create a note <MdAddCircle className="text-4xl" />
                </h1>
            </Link>
            <Link href="/dashboard/note" className="fixed bottom-4 right-4 md:hidden border-1 border-orange-500 text-white p-2 rounded-full">
                <MdAddCircleOutline className="text-4xl" />
            </Link>
        </div>
    );
}

export default DashboardPage;