import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const OtherArticles = () => {

    const navigate = useNavigate();
    const [articles, setArticles] = useState(null);

    const getArticles = async () => {
        try {
            let response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=87f6838779694951b71c56e201cdd0a3');
            if (response.ok) {
                let data = await response.json();
                let allArticles = data.articles;
                setArticles(allArticles);
            }
            else return new Error(response.statusText);

        }
        catch (e) { console.log(e) };
    }

    useEffect(() => { getArticles() }, []);

    return (
        <div className="p-10">
            <h2 className="font-semibold text-xl mb-4">Other Articles</h2>
            {
                articles && (
                    articles.slice(1, articles.length).map((article, index) => {
                        return (

                            <div key={index} className="border rounded shadow mb-4 w-full grid grid-cols-3">
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
                    })
                )
            }
        </div>
    )
}

export default OtherArticles