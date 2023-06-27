const Article = ({article}) => {
    return (
        <div className="p-10">
            <span className=" block mb-2 text-gray-400 text-xs">Autore - Data</span>
            <h2 className="font-semibold text-xl mb-2">Titolo</h2>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem ad saepe tenetur porro! Excepturi, a aperiam. Pariatur vero corporis voluptate nisi blanditiis, iure, tempora aliquam ratione cum dolorum soluta reprehenderit perspiciatis nesciunt quisquam asperiores ipsum velit aliquid magnam eius repellat officiis dicta. Doloremque vel, earum sint nostrum blanditiis minus nihil quod accusantium quam commodi velit perspiciatis praesentium et porro doloribus voluptatum perferendis. Amet fuga minus architecto inventore, nobis veritatis. Quasi dicta neque eveniet quos! Fugit nobis dolorum cum illum, ullam ad iste quis placeat? Quos dicta unde vero aliquam, eius voluptatem quam explicabo cum accusantium consequuntur officiis doloribus, expedita repellat?</p>
            <div className="text-end  my-8">
            <a href="#" target="_blank" className="bg-slate-700 p-3 rounded-full text-sm text-slate-200">Read More</a>
            </div>
        </div>
    )
}

export default Article;