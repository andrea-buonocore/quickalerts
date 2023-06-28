import { useDispatch, useSelector } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";
import Header from "./Header";

const SavedArticles = () => {

    const articles = useSelector(state => state.saveArticle.saved);
    const dispatch = useDispatch();

    return (
        <>
            <Header />
            <div className="p-10 dark:bg-gray-800 dark:text-gray-100 h-screen">
                {
                    articles.length ? <h2 className="font-semibold text-xl mb-4">Recently Saved Articles</h2> : <h2 className="font-semibold text-xl mb-4">You haven't added any articles to your favorites yet</h2>
                }
                <div className="lg:grid lg:grid-cols-2">
                    {

                        articles.map((article, i) => {
                            return (
                                <div className="flex" key={i}>
                                    <div className="border rounded shadow mb-4 w-full grid grid-cols-3 overflow-hidden col-span-3">
                                        <div className="absolute top-0 right-0 bg-white p-2 rounded-full">
                                        </div>
                                        <div>
                                            <img src={article.urlToImage} alt="article" className="h-full w-full  object-cover" />
                                        </div>

                                        <div className="p-3 flex items-center col-span-2">
                                            <a href={article.url} target="_blank" rel="noreferrer">
                                                <h3 className="font-semibold mb-2 text-sm">{article.title}</h3>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center p-5">
                                        <AiOutlineDelete className="hover:cursor-pointer" size={20} onClick={() => dispatch({ type: "REMOVE_ARTICLE", payload: article })} />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default SavedArticles;