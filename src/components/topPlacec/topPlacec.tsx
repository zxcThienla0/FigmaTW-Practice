import { cardData } from "./cardData"
import Like from "../../images/likes.webp"
import Comments from "../../images/comments.webp"

import "./topPlacec.css"

export default function topPlacec() {
    return (
        <section className="mt-35 max-w-316 m-auto lato-regular max-sm:px-4 mb-32">
            <p className="text-[35px] text-black ">Today top places to visit</p>
            <div className="w-63.5 h-0.75 bg-[#006DFE]"></div>
            <div className="mt-13.5 grid xl:grid-cols-3 gap-14 max-xl:content-center max-xl:flex max-xl:flex-col max-xl:items-center">
                {cardData.map((card, index) => (
                    <a href="!#" className="relative FixAdaptive flex flex-col justify-between" key={index}>
                            <img className="mb-11 object-cover h-94.25" src={card.image} alt={card.name} />
                            <div className="absolute left-0 top-81.25 w-full object-cover bg-[#15182499] py-3.5 px-6 flex justify-between items-center">
                                <p>{card.name}</p>
                                <div className="flex items-center">
                                    <p className="pr-1">{card.like}</p>
                                    <img src={Like} alt="Like" className="w-3.5 h-3.5" />
                                    <p className="pr-1 ml-3.5">{card.comments}</p>
                                    <img src={Comments} alt="Comments" className="w-3.5 h-3.5" />
                                </div>
                            </div>
                            <p className="text-[16px] text-black mb-7.75">{card.text}</p>
                            <p className="py-3 px-4.75 text-[16px] bg-[#006DFE] w-30 mt-auto">SEE MORE</p>
                    </a>
                ))}
            </div>
        </section>
    )
}