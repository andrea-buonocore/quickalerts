import { useSelector } from "react-redux";
import Header from "./Header";
import MainArticle from "./MainArticle";
import OtherArticles from "./OtherArticles";

const MainContainer = () => {

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

    return (
        <>
            <Header />
            <div className="p-10">
                <h2 className="font-semibold text-3xl text-center">{category.charAt(0).toUpperCase() + category.slice(1)} News In {flag}</h2>
            </div>
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 h-screen dark:bg-gray-800 dark:text-gray-100">
                <MainArticle />
                <OtherArticles />
            </div>
        </>
    )
}

export default MainContainer;