import Logo from "../../images/odigo-Logo.webp"

export default function Footer() {
    return (
        <footer className="sm:h-92.5 bg-[#0E1D28] lato-regular">
            <div className="max-w-316 pt-30 m-auto flex justify-between max-lg:flex-col">
                <div className="max-lg:flex max-lg:justify-center max-lg:pb-4"><img src={Logo} alt="Odigo" className="w-42.5" /></div>
                <div className="sm:w-155.5 max-lg:m-auto">
                    <div className="text-[18px] flex justify-between max-sm:flex-col sm:align-middle">
                        <li className="list-none">
                            <ul><a href="" className="hover:opacity-60">Company</a></ul>
                            <ul><a href="" className="hover:opacity-60">About</a> </ul>
                            <ul><a href="" className="hover:opacity-60">Team</a></ul>
                            <ul><a href="" className="hover:opacity-60">Careers</a></ul>
                            <ul><a href="" className="hover:opacity-60">Privacy Policy</a></ul>
                        </li>
                        <li className="list-none">
                            <ul><a href="" className="hover:opacity-60">Locations</a></ul>
                            <ul><a href="" className="hover:opacity-60">Tokyo</a> </ul>
                            <ul><a href="" className="hover:opacity-60">Kyoto</a></ul>
                            <ul><a href="" className="hover:opacity-60">Osaka</a></ul>
                            <ul><a href="" className="hover:opacity-60">Hokkaido</a></ul>
                        </li>
                        <li className="list-none mb-5">
                            <ul><a href="" className="hover:opacity-60">Social Media</a></ul>
                            <ul><a href="" className="hover:opacity-60">Facebook</a> </ul>
                            <ul><a href="" className="hover:opacity-60">Twitter</a></ul>
                            <ul><a href="" className="hover:opacity-60">Instagram</a></ul>
                            <ul><a href="" className="hover:opacity-60">Youtube</a></ul>
                        </li>
                    </div>
                </div>
            </div>
        </footer>
    )
}