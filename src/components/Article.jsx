import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Article = ({ article }) => {

    const [favorite, setFavorite] = useState(false);

    const toggleFavorite = () => { setFavorite(!favorite) };

    return (
        <div className="border rounded shadow mb-4 w-full grid grid-cols-3 relative">
            <div className="absolute top-0 right-0 bg-white p-2 rounded-full">
                {
                    favorite ?
                        <AiFillHeart size={20} className="hover:cursor-pointer" onClick={toggleFavorite} />
                        : <AiOutlineHeart size={20} className="hover:cursor-pointer" onClick={toggleFavorite} />
                }
            </div>
            <div>
                <img src={article.urlToImage} alt="article image" className="w-full h-full object-cover" />
            </div>

            <div className="p-3 flex items-center col-span-2">
                <a href={article.url} target="_blank" rel="noreferrer">
                    <h3 className="font-semibold mb-2 text-sm">{article.title}</h3>
                </a>
            </div>
        </div>
    )
}

export default Article;