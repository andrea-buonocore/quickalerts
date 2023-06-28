import Header from "./Header";
import MainArticle from "./MainArticle";
import OtherArticles from "./OtherArticles";

const MainContainer = () => {
    return (
        <>
            <Header />
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 h-screen dark:bg-gray-800 dark:text-gray-100">
                <MainArticle />
                <OtherArticles />
            </div>
        </>
    )
}

export default MainContainer;