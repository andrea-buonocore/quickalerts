import { useEffect, useState } from "react";

const OtherArticles = () => {

    const [articles, setArticles] = useState(null);

    const getArticles = async () => {
        try {
            let response = await fetch('https://newsdata.io/api/1/news?apikey=pub_252087299e2abed4e8707166cf0def090baca&country=it&category=technology');
            if (response.ok) {
                let data = await response.json();
                let articles = data.results;
                setArticles(articles);
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
                    articles.map((article, index) => {
                        return (
                            <div key={index} className="border rounded shadow mb-4 p-3 w-full">
                                <h3 className="font-semibold mb-2 text-lg">{article.title}</h3>
                                <p className="text-xs mb-5">{article.description}</p>
                                <div className="flex flex-wrap">

                                    {
                                        article.keywords.slice(0,3).map((keyword, index) => {
                                            return (
                                                <span key={index} className="text-xs p-2 mr-1 mb-1 bg-slate-500 rounded-full text-slate-200 capitalize">{keyword}</span>
                                            )
                                        })
                                    }
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