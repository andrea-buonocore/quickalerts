import { useEffect, useState } from "react";

const MainArticle = () => {

    const [article, setArticle] = useState(null);

    const getMainArticle = async () => {
        try {
            let response = await fetch('https://newsdata.io/api/1/news?apikey=pub_25208a8215da92ea8833ef941048bada082c3&country=it&category=technology');
            if (response.ok) {
                let data = await response.json();
                console.log(data.results);
                setArticle(data.results[0]);
            }
            else return new Error(response.statusText);

        }
        catch (e) {
            console.log(e);
        }

    }

    // useEffect(() => {getMainArticle()},[])


    return (
        <div className="w-full h-screen relative p-10">
            <div className="border rounded-xl overflow-hidden">
                <img src="https://picsum.photos/4000" height={300} alt="" className="" />
                <div className="p-3 bg-black/80">
                    <h2 className="font-semibold text-xl">Titolo</h2>
                    <p className="font-light text-xs">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores atque officia sequi ducimus fugit laboriosam, ipsa inventore similique porro praesentium perspiciatis nulla. Quidem quod nam saepe reprehenderit architecto velit molestiae?</p>
                </div>

            </div>
        </div>
    )
}

export default MainArticle;