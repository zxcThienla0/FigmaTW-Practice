import Arrow from "../../images/Shape.webp"

export default function aWhithArrow ({ text }: { text: string }){
    return (
        <a href="" className="flex items-center hover:opacity-70 transition-all" >
            <p className="text-[14px] text-[#006DFE] mr-6.5">{text}</p>
            <p className=""><img src={Arrow} alt="arrow" className="w-8.25"/></p>
        </a>
    )
}