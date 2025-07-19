import logo from "../../images/odigo-logo.svg"

export default function Header() {

    return (
        <header
            className="bg-[url(./images/Hero.svg)] bg-no-repeat bg-center bg-cover sm:h-screen sm:min-h-100vh h-170 px-4">
            <nav className="max-w-265 m-auto lato-regular sm:flex justify-between pt-4 sm:pt-14">
                <a href="" className=" flex justify-center">
                    <img src={logo} alt="Logo" className="" />
                </a>
                <div className="flex justify-between max-sm:mt-5">
                    <span className="sm:ml-20.5"><a href="">Articles</a></span>
                    <span className="sm:ml-20.5"><a href="">Locations</a></span>
                    <span className="sm:ml-20.5"><a href="">Videos</a></span>
                    <span className="sm:ml-20.5"><a href="">Sign in</a></span>
                </div>
            </nav>
            <div className="max-w-265 m-auto">
                <h1 className="max-w-155 sm:mt-44 mt-4 text-5xl lato-bold">Discover Amazing places in Japan</h1>
                <p className="mt-5.5 max-w-136.5 leading-6 text-[16px] lato-regular">Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this if i had the energy but under the bed, for attack the child, open the door. </p>
            </div>
            <div className="max-w-265 m-auto sm:mt-15 mt-4">
                <form>
                    <fieldset className="flex flex-wrap text-[18px] text-white max-h-12.75">
                            <input
                                type="text"
                                name="user-like-to-do"
                                className="bg-[url(./images/input-image.svg)] bg-no-repeat bg-[length:20px] bg-[position:left_calc(0%_+_8px)]
                                border-b-2 border-b-[#BFC0C5] border-0
                                w-74.25 pl-10.75 pb-5.5 sm:mr-15 mt-4
                                outline-none
                                placeholder:text-[18px] placeholder:font-medium placeholder:text-white"
                                placeholder="What would you like to do?" />
                                
                            <input
                                type="text"
                                name="user-like-to-go"
                                className="bg-[url(./images/input-image.svg)] bg-no-repeat bg-[length:20px] bg-[position:left_calc(0%_+_8px)]
                                border-b-2 border-b-[#BFC0C5] border-0
                                w-74.25 pl-10.75 pb-5.5 sm:mr-15 mt-4
                                outline-none
                                placeholder:text-[18px] placeholder:font-medium placeholder:text-white"
                                placeholder="Where would you like to go?" />
                            <button type="submit" className="bg-[#1B7DFF] py-3.5 px-9.75 text-2xl lato-regular mt-4
                            duration-100 hover:bg-[#1150a3] active:bg-[#1150a3] ">SEARCH</button>
                    </fieldset>
                </form>
            </div>
        </header>
    )

}