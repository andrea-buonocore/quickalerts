import { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";

const MainArticle = () => {

    const [article, setArticle] = useState(null);

    const getMainArticle = async () => {
        try {
            let response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=87f6838779694951b71c56e201cdd0a3');
            if (response.ok) {
                let data = await response.json();
                console.log(data.articles);
                setArticle(data.articles[0]);
            }
            else return new Error(response.statusText);

        }
        catch (e) {
            console.log(e);
        }

    }



    useEffect(() => { getMainArticle() }, [])


    return (
        <div className="w-full p-10">
            {
                article && (
                    <div className="shadow rounded-xl overflow-hidden relative">
                        <div className="absolute top-2 right-2 bg-white p-3 rounded-full"><AiOutlineHeart size={20} className="hover:cursor-pointer"/></div>
                            <img src={article.urlToImage} alt="Article Image" className="w-full object-cover" />
                            <div className="p-3">
                        <a href={article.url} target="_blank" rel="noreferrer">
                                <h2 className="font-semibold text-xl mb-4">{article.title}</h2>
                        </a>
                        <p className="font-light text-xs">{article.description}</p>
                    </div>
                    </div>
    )
}
        </div >
    )
}

export default MainArticle;