import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, shoeG, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";


import {
    CustomersReviews,
    Footer, Hero,
    Products,
    Services,
    SpecialOffer,
    Subscribe, SuperQuality
} from "../sections";








  interface Stat {
    value: string;
    label: string;
}

interface Navlinks {
    href: string ;
    label: string;   
}

export interface Prducts   {
    id:number,
    imgURL: string;
    name: string;
    price?: string;
    
}
interface Services{
    imgURL: string;
    label: string;
    subtext: string;
}
interface FooterLinks {
    title: string;
    links: {
        name: string;
        link: string;
    }[];
}
interface Reviews  {
    imgURL: string;
    customerName: string;
    rating: number;
    feedback: string;
}
interface SocialMedia {
    src: string;
    alt: string;
}
interface Components {
    path: string;
    element: JSX.Element;
}



export const components:Components[] = [
    {
        path: "hero",
        element: <Hero />
    },{
        path: "products",
        element: <Products/>
    },{
        path: "superQuality",
        element: <SuperQuality />
    },
     {
        path: "specialOffers",
        element:<SpecialOffer/>
    },  {
        path: "services",
        element: <Services/>
    },{
        path: "customersReviews",
        element: <CustomersReviews/>
    },
    {
        path: "subscribe",
        element: <Subscribe/>
    },{
        path: "footer",
        element: <Footer/>
    }]
export const navLinks: Required<Navlinks[]> = [
    { href: "/", label: "Home"},
    { href: "about-us", label: "About" },
    { href: "products", label: "Products" },
    { href: "contact", label: "Contact" },
];

export const shoes:Record<"thumbnail" | "bigShoe",string>[] = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const ViewProducts:Prducts[] = [
    {
        id:0,
       imgURL: bigShoe1,
         name: "Nike Air Jordan-01",
        price: "$200.20",
    },
    {
        id:1,
      imgURL: bigShoe2,
     name: "Nike Air Jordan-01",
        price: "$200.20",
    },
    {
        id:2,
      imgURL: bigShoe3,
         name: "Nike Air Jordan-01",
        price: "$200.20",
    },
    {
        id:3,
      imgURL: shoe4,
         name: "Nike Air Jordan-01",
        price: "$200.20",
    },
    {
        id:4,
      imgURL: shoe5,
         name: "Nike Air Jordan-01",
        price: "$200.20",
    },
    {
        id:5,
      imgURL: shoe6,
         name: "Nike Air Jordan-01",
        price: "$200.20",
    },
    {
        id:6,
       imgURL: shoe7,
         name: "Nike Air Jordan-01",
        price: "$200.20",
    },   
    {
        id:7,
       imgURL: shoeG,
         name: "Nike Air Jordan-01",
        price: "$200.20",
    },   
]

export const statistics:Stat[] = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products:Prducts[] = [
    {
        id: 0,
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "$200.20",
    },
    {
        id:1,
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "$210.20",
    },
    {
        id: 2,
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "$220.20",
    },
    {
        id:3,
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "$230.20",
    }
    
];

export const services:Services[] = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews:Reviews[] = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks:FooterLinks[] = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/products" },
            { name: "Air Max 1", link: "/products" },
            { name: "Air Jordan 1", link: "/products" },
            { name: "Air Force 2", link: "/products" },
            { name: "Nike Waffle Racer", link: "/products" },
            { name: "Nike Cortez", link: "/products" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia:SocialMedia[] = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];