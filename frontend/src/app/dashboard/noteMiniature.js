import Link from "next/link";

const NoteMiniature = ({ note }) => {
    return (
        <Link href={`/dashboard/note/${note._id}`} className="w-72 h-40 rounded-lg bg-orange-400 p-4 overflow-hidden mx-8">
            <div className="border-b border-gray-200">
                <h3>{note.title}</h3>
            </div>
            <p>{note.content}</p>
        </Link>
    );
}

export default NoteMiniature;