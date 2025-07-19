import Nagoya from "../../image4topPlacec/NagoyaTOP.webp"
import Niigata from "../../image4topPlacec/NiigataTOP.webp"
import Osaka from "../../image4topPlacec/OsakaTOP.webp"
import Saitama from "../../image4topPlacec/SaitamaTOP.webp"
import Shibuya from "../../image4topPlacec/ShibuyaTOP.webp"
import Ueno from "../../image4topPlacec/UenoTOP.webp"

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