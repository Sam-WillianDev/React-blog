export default function PostContent() {
    return (
        <div className="flex gap-4 ml-3">
            <div className="w-[400px]">
                <h2 className=" font-bold mb-2 text-2xl">Mulher batendo foto com cafezin</h2>
                <p className="line-clamp-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce ultricies venenatis nisi,eu porta nibh. Etiam rhoncus euismod ipsum, vel aliquet felis venenatis.</p>
            </div>
            <div className="w-[80px] h-[100px]">
                <img src="../public/pesssoa.avif" alt="" />
            </div>
        </div>
    )
}