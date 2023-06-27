import { useEffect, useState } from "react";

const MainArticle = () => {

    const [article, setArticle] = useState(null);

    const getMainArticle = async () => {
        try {
            let response = await fetch('https://newsdata.io/api/1/news?apikey=pub_252087299e2abed4e8707166cf0def090baca&country=it&category=technology');
            if (response.ok) {
                let data = await response.json();
                console.log(data.results);
                setArticle(data.results.find(article => article.image_url !== null));
            }
            else return new Error(response.statusText);

        }
        catch (e) {
            console.log(e);
        }

    }



    useEffect(() => { getMainArticle() }, [])


    return (
        <div className="w-full relative p-10">
            <h2 className="font-semibold text-xl mb-4">Latest News!</h2>

            {
                article && (
                    <div className="shadow rounded-xl overflow-hidden">
                        <img src={article.image_url} alt="main article image" className=" object-cover w-full" />
                        <div className="p-3">
                            <h2 className="font-semibold text-xl mb-4">{article.title}</h2>
                            <p className="font-light text-xs">{article.description}</p>
                        </div>

                    </div>
                )
            }
        </div>
    )
}

export default MainArticle;