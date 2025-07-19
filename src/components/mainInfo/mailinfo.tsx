import Icon1 from "../../images/IconCastle.svg"
import Icon2 from "../../images/IconPPL.svg"
import Icon3 from "../../images/IconShop.svg"
import AWhithArrow from "../supComponents/aWhithArrow"

export default function MainInfo() {
    return (
        <section >
            <div className="mt-20 sm:mt-0 max-w-315 bg-white px-5 sm:px-25 text-black m-auto shadow-[0px_2px_20px_rgba(21,24,36,0.15993)] relative lato-regular rounded-b-xl">
                <h2 className="absolute top-0 left-0 px-5 sm:px-25 -translate-y-full sm:pt-23.25 sm:pb-22 pt-4 bg-white text-4xl w-full rounded-t-xl">
                    Benefits of Odigo
                </h2>
                <div className="pt-8 flex max-md:flex-col max-md:items-center  pb-28 justify-between">
                    <div className="sm:w-79.25">
                        <img src={Icon1} alt="" className="mb-9" />
                        <p className="text-[18px] mb-6.5">Welcome to Odigo!</p>
                        <p className="text-[16px]/[24px] mb-10.75">Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.</p>
                        <AWhithArrow text="LEARN MORE" />
                    </div>
                    <div className="sm:w-79.25 mt-0.5">
                        <img src={Icon2} alt="" className="mb-9" />
                        <p className="text-[18px] mb-6.5">Your Personal Japan Guide</p>
                        <p className="text-[16px]/[24px] mb-10.75">Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.</p>
                        <AWhithArrow text="LEARN MORE" />
                    </div>
                    <div className="sm:w-79.25 mt-2.25">
                        <img src={Icon3} alt="" className="mb-9" />
                        <p className="text-[18px] mb-6.5">Promoting Local Businesses</p>
                        <p className="text-[16px]/[24px] mb-10.75">Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.</p>
                        <AWhithArrow text="LEARN MORE" />
                    </div>
                </div>
            </div>
        </section>
    )
}