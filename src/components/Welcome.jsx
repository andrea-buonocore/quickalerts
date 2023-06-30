import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import bg_video from "../video/bg_video.mp4"
import { BiWorld, BiCategoryAlt } from "react-icons/bi";

const Welcome = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const selectedCategory = useSelector(state => state.category.category)
    const selectedCountry = useSelector(state => state.country.country)

    const handleCategoryChange = (event) => {
        let chosenCategory = event.target.value;
        // Esegui il dispatch dell'azione con il valore selezionato
        dispatch({ type: "CHANGE_CATEGORY", payload: chosenCategory });
    };

    const handleCountryChange = (event) => {
        let chosenCountry = event.target.value;
        // Esegui il dispatch dell'azione con il valore selezionato
        dispatch({ type: "CHANGE_COUNTRY", payload: chosenCountry });
    };

    return (
        <div className="w-full h-screen relative">
            <video autoPlay muted loop className="w-full h-full object-cover">
                <source src={bg_video} type="video/mp4" />
            </video>
            <div className="fixed top-0 left-0 h-screen w-full bg-black/80 flex z-20 flex-col items-center justify-center text-white">
                <div className="mb-12">
                    <h1 className="text-6xl font-semibold mb-4">QuickAlerts</h1>
                    <span className="font-light block text-center">Stay Informed, Stay Ahead</span>
                </div>
                <div className="lg:grid lg:grid-cols-2 mb-12">
                    <div className="mb-4">
                        <div className="flex mb-4 items-center">
                            <BiCategoryAlt size={20} className="mr-2" />
                            <h2 className="font-semibold text-md">Category</h2>
                        </div>
                        <form>
                            <label htmlFor="category" className="mr-4 text-sm">Choose category</label>
                            <select name="category" id="category" onChange={handleCategoryChange} defaultValue={selectedCategory} className="border p-1 border-white bg-transparent text-white rounded-lg ">
                                <option value="business">Business</option>
                                <option value="entertainment">Entertainment</option>
                                <option value="general">General</option>
                                <option value="health">Health</option>
                                <option value="science">Science</option>
                                <option value="sports">Sport</option>
                                <option value="technology">Technology</option>
                            </select>
                        </form>
                    </div>
                    <div>
                        <div className="flex items-center mb-4">
                            <BiWorld size={20} className="mr-2" />
                            <h2 className="font-semibold text-md">Country</h2>
                        </div>
                        <form>
                            <label htmlFor="country" className="mr-4 text-sm">Choose country</label>
                            <select name="country" id="country" onChange={handleCountryChange} defaultValue={selectedCountry} className="border p-1 border-white bg-transparent text-white rounded-lg ">
                                <option value="us">Unites States of America</option>
                                <option value="it">Italy</option>
                                <option value="fr">France</option>
                                <option value="cn">Cina</option>
                                <option value="de">Germany</option>
                                <option value="gb">United Kingdom</option>
                                <option value="jp">Japan</option>
                            </select>
                        </form>
                    </div>
                </div>
                <button className="border rounded-lg p-3 text-sm dark:border-none hover:bg-gray-800 transition-colors" onClick={() => { navigate('/home') }}>Unlock the power of information</button>
            </div>


        </div>
    )
}

export default Welcome;