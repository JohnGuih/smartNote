"use client"

import getUserNote from "@/api/getUserNote";
import SendNote from "@/api/sendNote";
import formDataAsJSON from "@/utils/formDataAsJSON";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Note = ({ params }) => {
    const { noteID } = params;

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;
        const newNote = { ...note, [name]: value };
        setNote(newNote);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const formData = formDataAsJSON(event);

        SendNote(formData)
            .then(response => {
                console.log(response);
                // route.push('/dashboard');
                window.location.href = '/dashboard';
            })
            .catch(err => {
                console.error(err);
            });
    }

    useEffect(() => {
        if (noteID) {
            getUserNote(noteID)
                .then(response => {
                    setTitle(response.note.title);
                    setContent(response.note.content);
                })
                .catch(err => {
                    console.error(err);
                });
        }
    }, [])

    return (
        <div className="p-2 w-full h-full">
            <div className="w-full h-full rounded-lg bg-orange-400 p-2 overflow-auto">
                <form id="myForm" className="w-full h-full" onSubmit={handleSubmit}>
                    <div className="border-b border-gray-200">
                        <input
                            type="text"
                            name="title"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            className="appearance-none  bg-transparent focus:outline-none w-full"
                        />
                    </div>
                    <textarea
                        name="content"
                        value={content}
                        onChange={e => setContent(e.target.value)}
                        className="appearance-none bg-transparent focus:outline-none w-full h-full resize-none"
                    />
                </form>
            </div>
        </div>
    );
}

export default Note;