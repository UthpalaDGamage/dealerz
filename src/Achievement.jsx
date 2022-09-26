import logoOne from "./logo/logo1.svg";
import logoTwo from "./logo/logo2.svg";
import logoThree from "./logo/logo3.svg";
import logoFour from "./logo/logo4.svg";
export const Achievement = () => {
    return (
        <>
            <h3 className="title">Our Achievement</h3>
            <div className="logo-section">
                <img src={logoOne} alt="logo1" />
                <img src={logoTwo} alt="logo2" />
                <img src={logoThree} alt="logo3" />
                <img src={logoFour} alt="logo4" />
                <img src={logoTwo} alt="logo2" />
                <img src={logoOne} alt="logo1" />
            </div>
        </>
    );
};
