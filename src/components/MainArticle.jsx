import { useEffect, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "./Spinner";

const MainArticle = () => {

    const [article, setArticle] = useState(null);
    const [favorite, setFavorite] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    const savedArticles = useSelector(state => state.saveArticle.saved);
    const category = useSelector(state => state.category.category);
    const country = useSelector(state => state.country.country);
    
    let flag;

    switch (country) {
        case "us":
            flag = "🇺🇸";
            break;
        case "it":
            flag = "🇮🇹";
            break;
        case "fr":
            flag = "🇫🇷";
            break;
        case "ci":
            flag = "🇨🇳";
            break;
        case "de":
            flag = "🇩🇪";
            break;
        case "gb":
            flag = "🇬🇧";
            break;
        case "jp":
            flag = "🇯🇵";
            break;


        default:
            flag = "";
    }


    const getMainArticle = async () => {
        try {
            let response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=87f6838779694951b71c56e201cdd0a3`);
            if (response.ok) {
                let data = await response.json();
                setArticle(data.articles.find(article => article.urlToImage !== null));
                setIsLoading(false);
            }
            else return new Error(response.statusText); setIsLoading(false);

        }
        catch (e) {
            console.log(e);
            setIsLoading(false);
        }

    }

    const toggleFavorite = () => { setFavorite(!favorite) };



    useEffect(() => { getMainArticle() }, [])


    return (
        <div className="w-full p-10 dark:bg-gray-900 dark:text-gray-100">
            <h2 className="font-semibold text-xl mb-4">{category.charAt(0).toUpperCase() + category.slice(1)} News In {flag}</h2>
            {
                isLoading && <Spinner />
            }
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
                        <img src={article.urlToImage} alt="Article" className="w-full object-cover" />
                        <div className="p-3 dark:bg-gray-700">
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