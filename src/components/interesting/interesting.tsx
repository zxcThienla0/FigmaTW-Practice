import Tottori from "../../imagesCity/tottoriInteresting.svg"
import Kyoto from "../../imagesCity/kyotoInteresting.svg"
import AWhithArrow from "../supComponents/aWhithArrow"

export default function interesting() {
    return (
        <section className="mt-42 max-w-316 m-auto lato-regular max-xl:px-4 text-black max-xl:content-center max-xl:flex max-xl:flex-col items-center">
            <div className="flex justify-between xl:pr-12 max-xl:content-center max-xl:flex max-xl:flex-col items-center">
                <img src={Tottori} alt="Tottori" className="object-cover w-149.25 h-88.5 " />
                <div className="xl:w-130">
                    <h3 className="pt-6.5 text-[30px]">Prefecture in Focus: Tottori</h3>
                    <p className="sm:mt-21.25 text-[16px] mb-14.5">Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this if i had the energy but under the bed, for attack the child, open the door, </p>
                    <AWhithArrow text="VIEW PREFECTURE" />
                </div>
            </div>
            <div className="flex justify-between mt-19 xl:pl-12 max-xl:flex-col-reverse items-center">
                <div className="xl:w-130">
                    <h3 className="pt-6.5 text-[30px]">Featured Neighborhood: Kyoto’s Arashiyama</h3>
                    <p className="mt-21.25 text-[16px] mb-14.5">Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this if i had the energy but under the bed, for attack the child, open the door, </p>
                    <AWhithArrow text="VIEW PREFECTURE" />
                </div>
                <img src={Kyoto} alt="Kyoto" className="object-cover w-149.25 h-88.5 " />

            </div>
        </section>
    )
}