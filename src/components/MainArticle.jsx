import { useEffect, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const MainArticle = () => {

    const [article, setArticle] = useState(null);
    const [favorite, setFavorite] = useState(false);
    const dispatch = useDispatch();
    const savedArticles = useSelector(state => state.saveArticle.saved);
    const category = useSelector(state => state.category.category);
    const country = useSelector(state => state.country.country);

    const getMainArticle = async () => {
        try {
            let response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=87f6838779694951b71c56e201cdd0a3`);
            if (response.ok) {
                let data = await response.json();
                setArticle(data.articles[0]);
            }
            else return new Error(response.statusText);

        }
        catch (e) {
            console.log(e);
        }

    }

    const toggleFavorite = () => { setFavorite(!favorite) };



    useEffect(() => { getMainArticle() }, [])


    return (
        <div className="w-full p-10">
            <h2 className="mb-4 font-semibold text-xl">Breaking News!</h2>
            {
                article && (
                    <div className="shadow rounded-xl overflow-hidden relative">
                        <div className="absolute top-2 right-2 bg-white p-3 rounded-full">
                            {
                                savedArticles.some(singleArticle => singleArticle.url === article.url)
                                    ?
                                    <AiFillHeart size={20} className="hover:cursor-pointer text-red-800" onClick={
                                        () => {
                                            toggleFavorite();
                                            dispatch({
                                                type: "REMOVE_ARTICLE",
                                                payload: article
                                            });
                                        }
                                    } />
                                    : <AiOutlineHeart size={20} className="hover:cursor-pointer" onClick={() => {

                                        toggleFavorite();
                                        dispatch({
                                            type: "SAVE_ARTICLE",
                                            payload: article
                                        });
                                    }
                                    } />
                            }
                        </div>
                        <img src={article.urlToImage} alt="Article" className="w-full object-cover" />
                        <div className="p-3">
                            <a href={article.url} target="_blank" rel="noreferrer">
                                <h2 className="font-semibold text-xl mb-4">{article.title}</h2>
                                <p className="font-light text-xs">{article.description}</p>
                            </a>
                        </div>
                    </div>
                )
            }
        </div >
    )
}

export default MainArticle;