import Header from "./Header";
import Hero from "./MainArticle";
import bg from "../img/news.jpg";
import OtherArticles from "./OtherArticles";

const MainContainer = () => {
    return (
        <div className="w-full">
            <div className="grid sm:grid-cols-1 lg:grid-cols-2">
                <Hero />
                <OtherArticles />
            </div>

        </div>
    )
}

export default MainContainer;