import Arrow from "../../images/Shape.svg"

export default function aWhithArrow ({ text }: { text: string }){
    return (
        <a href="" className="flex items-center" >
            <p className="text-[14px] text-[#006DFE] mr-6.5">{text}</p>
            <p className=""><img src={Arrow} alt="arrow" /></p>
        </a>
    )
}