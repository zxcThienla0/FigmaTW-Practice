import logo from "../../images/odigo-logo.svg"

export default function Header() {

    return (
        <header className="bg-[url(./images/Hero.svg)] bg-no-repeat bg-center bg-cover h-screen">
            <nav className="max-w-265 m-auto lato-regular flex justify-between pt-14">
                <a href="">
                    <img src={logo} alt="Logo" className="float-left" />
                </a>
                <div className="float-right">
                    <span className="ml-20.5"><a href="">Articles</a></span>
                    <span className="ml-20.5"><a href="">Locations</a></span>
                    <span className="ml-20.5"><a href="">Videos</a></span>
                    <span className="ml-20.5"><a href="">Sign in</a></span>
                </div>
            </nav>
            <div className="max-w-265 m-auto">
                <h1 className="max-w-155 mt-44 text-5xl lato-bold">Discover Amazing places in Japan</h1>
                <p className="mt-5.5 max-w-136.5 leading-6">Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this if i had the energy but under the bed, for attack the child, open the door, </p>
            </div>
            <div className="max-w-265 m-auto mt-15">
                <form>
                    <fieldset>
                        <p>
                            <input type="text" />
                        </p>
                    </fieldset>
                </form>
            </div>
        </header>
    )

}