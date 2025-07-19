import Nagoya from "../../image4topPlacec/NagoyaTop.svg"
import Niigata from "../../image4topPlacec/NiigataTop.svg"
import Osaka from "../../image4topPlacec/OsakaTop.svg"
import Saitama from "../../image4topPlacec/SaitamaTop.svg"
import Shibuya from "../../image4topPlacec/ShibuyaTop.svg"
import Ueno from "../../image4topPlacec/UenoTop.svg"

export interface NewsProps {
    id: number
    name: string
    like: number
    comments: number
    image: string
    link: string
    text: string
}

export const cardData =[
    {
        id: 1,
        name: "NAGOYA",
        like: 221,
        comments: 50,
        image: Nagoya,
        link: "",
        text: "Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this."
    },
    {
        id: 2,
        name: "NIIGATA",
        like: 221,
        comments: 50,
        image: Niigata,
        link: "",
        text: "Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this."
    },
    {
        id: 3,
        name: "OSAKA",
        like: 221,
        comments: 50,
        image: Osaka,
        link: "",
        text: "Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this."
    },
    {
        id: 4,
        name: "SAITAMA",
        like: 221,
        comments: 50,
        image: Saitama,
        link: "",
        text: "Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this."
    },
    {
        id: 5,
        name: "UENO",
        like: 221,
        comments: 50,
        image: Ueno,
        link: "",
        text: "Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this."
    },
    {
        id: 6,
        name: "SHIBUYA",
        like: 221,
        comments: 50,
        image: Shibuya,
        link: "",
        text: "Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this."
    },
    
]