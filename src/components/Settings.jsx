import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { AiOutlineSetting } from "react-icons/ai";
import { BiWorld, BiCategoryAlt } from "react-icons/bi";

const Settings = () => {

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
        <>
            <Header />
            <div className="p-10 lg:grid grid-cols-2">
                <div className="mb-4">
                    <div className="flex mb-4 items-center">
                        <BiCategoryAlt size={20} className="mr-2"/>
                        <h2 className="font-semibold text-xl">Category</h2>
                    </div>
                    <form>
                        <label htmlFor="category" className="mr-4">Change category</label>
                        <select name="category" id="category" onChange={handleCategoryChange} defaultValue={selectedCategory} className="border p-3 rounded-lg">
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
                    <BiWorld size={20} className="mr-2"/>
                    <h2 className="font-semibold text-xl">Country</h2>
                    </div>
                    <form>
                        <label htmlFor="country" className="mr-4">Change country</label>
                        <select name="country" id="country" onChange={handleCountryChange} defaultValue={selectedCountry} className="border p-3 rounded-lg">
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
        </>
    )
}

export default Settings;

