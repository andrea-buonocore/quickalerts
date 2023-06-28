import { useEffect, useState } from "react";
import Article from "./Article";
import { useDispatch, useSelector } from "react-redux";

const OtherArticles = () => {

    const [articles, setArticles] = useState(null);
    const category = useSelector(state => state.category.category);
    const country = useSelector(state => state.country.country);

    const getArticles = async () => {
        try {
            let response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=87f6838779694951b71c56e201cdd0a3`);
            if (response.ok) {
                let data = await response.json();
                let allArticles = data.articles;
                console.log('allArticles', allArticles)
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
                        return <Article key={index} article={article} />
                    })
                )
            }
        </div>
    )
}

export default OtherArticles