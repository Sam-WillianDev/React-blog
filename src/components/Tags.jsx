export default function Tags() {
    return (
        <div className="flex flex-col gap-1 ml-3">
            <h3 className="text-xl pb-4">Tags</h3>
            <ul className="flex gap-2 flex-wrap ">
                <li className="bg-blue-200 hover:bg-blue-300 rounded">
                    <a className= "py-2 px-4 inline-block" href="#">JavaScript</a>
                </li>
                <li className="bg-blue-200 hover:bg-blue-300 rounded">
                    <a className= "py-2 px-4 inline-block" href="#">React</a>
                </li>
                <li className="bg-blue-200 hover:bg-blue-300 rounded">
                    <a className= "py-2 px-4 inline-block" href="#">Node</a>
                </li>
                <li className="bg-blue-200 hover:bg-blue-300 rounded">
                    <a className= "py-2 px-4 inline-block" href="#">Tailwind</a>
                </li>
            </ul>
        </div>
    )
}