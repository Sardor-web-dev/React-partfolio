import { useLocalStorage } from "../../utils/useLocalStorage"
import { useEffect } from "react"
import sun from "./sun.svg"
import moon from "./moon.svg"
import "./style.css"
import detectDarkMode from "../../utils/detectDarkMode"

const BtnDark = () => {

    const [darkMode, setDarkMode] = useLocalStorage('darkMode',detectDarkMode());

    useEffect(() => {
        if(darkMode === 'dark') {
            document.body.classList.add('dark')
        }
        else{
            document.body.classList.remove('dark')
        }
    }, [darkMode]);

    useEffect(() => {
        window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";
        setDarkMode(newColorScheme);

    });
    }, [])



    const toggleDarkMode = () => {
        setDarkMode((currentValue) => {
            return currentValue === 'light' ? 'dark' : 'light';
        });
        
    };

    const btnNormal = "dark-mode-btn"
    const btnActive = "dark-mode-btn dark-mode-btn--active "

    return(
        <>
                        <button className={darkMode === 'dark' ? btnActive : btnNormal} onClick={toggleDarkMode}>
                    <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
                    <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
                </button>
        </>
    )
}
export default BtnDark;