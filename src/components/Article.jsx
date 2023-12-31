import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const Article = ({ article }) => {

    const [favorite, setFavorite] = useState(false);
    const dispatch = useDispatch();
    const savedArticles = useSelector(state => state.saveArticle.saved);

    const toggleFavorite = () => { setFavorite(!favorite) };

    return (
        <div className="border dark:border-none shadow mb-4 w-full grid grid-cols-3 relative overflow-hidden rounded-xl">
            <div className="absolute top-2 right-2 bg-white p-2 rounded-full">
                {
                    savedArticles.some(singleArticle => singleArticle.url === article.url) ?
                        <AiFillHeart size={20} className="hover:cursor-pointer text-red-800" onClick={
                            () => {
                                toggleFavorite();
                                dispatch({
                                    type: "REMOVE_ARTICLE",
                                    payload: article
                                });
                            }
                        } />
                        : <AiOutlineHeart size={20} className="hover:cursor-pointer text-gray-900" onClick={() => {

                            toggleFavorite();
                            dispatch({
                                type: "SAVE_ARTICLE",
                                payload: article
                            });
                        }
                        } />
                }
            </div>
            <div>
                <img src={article.urlToImage} alt="article" className="w-full h-[120px] lg:h-[150px] object-cover" />
            </div>

            <div className="p-3 pr-12 flex items-center col-span-2 dark:bg-gray-700">
                <a href={article.url} target="_blank" rel="noreferrer">
                    <h3 className="font-semibold mb-2 text-sm">{article.title}</h3>
                    <p className="font-light text-xs hidden lg:block">{article.description}</p>
                </a>
            </div>
        </div>
    )
}

export default Article;