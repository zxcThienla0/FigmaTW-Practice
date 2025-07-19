import AWhithArrow from "../supComponents/aWhithArrow"
import MountFuji from "../../imagesCity/MountFujiIMG.svg"
import Kyoto from "../../imagesCity/KyotoIMG.svg"
import Tokyo from "../../imagesCity/TokyoIMG.svg"
import Niigata from "../../imagesCity/NiigataIMG.svg"
import Sapporo from "../../imagesCity/SapporoIMG.svg"

import './placecComp.css'



export default function placecComp() {
    return (
        <section className="mt-32.75 max-w-316 m-auto lato-regular max-sm:px-4">
            <div className="flex justify-between items-center">
                <p className="text-[35px] text-black ">Get inspired for your next trip</p>
                <AWhithArrow text="LEARN MORE" />
            </div>
            <div className="w-63.5 h-0.75 bg-[#006DFE]"></div>
            <div className="mt-9 grid sm:grid-cols-6 gap-2.5">
                <figure className="grid col-span-3 imageBG">
                    <img src={MountFuji} alt="MountFuji" className="sm:h-88.5 h-70.75 object-cover w-full" />
                    <figcaption className="text-[50px] z-10 absolute bottom-6.75 left-7.25">
                        Mount Fuji
                    </figcaption>
                </figure>
                <figure className="grid col-span-3 imageBG">
                    <img src={Kyoto} alt="MountFuji" className="sm:h-88.5 h-70.75 object-cover w-full" />
                    <figcaption className="text-[50px] z-10 absolute bottom-6.75 left-7.25">
                        Kyoto
                    </figcaption>
                </figure>
                <figure className="grid sm:col-span-2 col-span-3 imageBG">
                    <img src={Tokyo} alt="MountFuji" className="h-70.75 object-cover w-full" />
                    <figcaption className="text-[50px] z-10 absolute bottom-6.75 left-7.25">
                        Tokyo
                    </figcaption>
                </figure>
                <figure className="grid sm:col-span-2 col-span-3 imageBG">
                    <img src={Niigata} alt="MountFuji" className="h-70.75 object-cover w-full" />
                    <figcaption className="text-[50px] z-10 absolute bottom-6.75 left-7.25">
                        Niigata
                    </figcaption>
                </figure>
                <figure className="grid sm:col-span-2 col-span-3 imageBG">
                    <img src={Sapporo} alt="MountFuji" className="h-70.75 object-cover w-full" />
                    <figcaption className="text-[50px] z-10 absolute bottom-6.75 left-7.25">
                        Sapporo
                    </figcaption>
                </figure>
                <div></div>
            </div>
        </section>
    )
}