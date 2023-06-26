import Header from "./Header";
import Hero from "./MainArticle";
import bg from "../img/news.jpg";

const MainContainer = () => {
    return (
        <div className="w-full h-screen relative">
            <img src={bg} alt="background image" className="w-full h-screen object-cover" />
            <div className="absolute top-0 left-0 w-full h-screen bg-black/70 text-white">
                <Header />
                <div className="grid sm:grid-cols-1 lg:grid-cols-2">
                    <Hero />
                </div>
            </div>
        </div>
    )
}

export default MainContainer;