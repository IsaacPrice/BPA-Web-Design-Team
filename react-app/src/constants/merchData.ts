import { Merch } from "../types/Merch";


export const MERCH_DATA: Merch[] =
[
    {
        name: "Blue Stage Fright T-shirt",
        linkName: 'blue-stage-fright-tshirt',
        category: "T-shirt",
        price: 15.99,
        imagePaths: ["public/images/BlueTshirt1.png", "public/images/BlueTshirt2.png", "public/images/BlueTshirt3.png"],
        sizes: ["Small", "Medium", "Large", "X-Large", "XX-Large", "XXX-Large"],
        sizeAbbreviations: ["sm", "md", "lg", 'xl', 'xxl', 'xxxl'],
        description: "Show your love for Stage Fright in style! This comfortable, high-quality blue T-shirt features the band’s bold logo front and center. Perfect for concerts, casual outings, or just lounging.",
    },
    {
        name: "Red Stage Fright Hoodie",
        linkName: 'red-stage-fright-hoodie',
        category: "Hoodie",
        price: 35.99,
        imagePaths: ["public/images/RedHoodie1.png", "public/images/RedHoodie2.png"],
        sizes: ["Small", "Medium", "Large", "X-Large", "XX-Large"],
        sizeAbbreviations: ['sm', 'md', 'lg', 'xl', 'xxl'],
        description: "Stay cozy and cool with the Stage Fright red hoodie. This premium pullover showcases the band’s iconic design on soft, warm fabric—ideal for colder days or late-night gigs. Comes in sizes Small to XX-Large for the perfect fit.",
    },
    {
        name: "Black Stage Fright Cap",
        linkName: 'black-stage-fright-cap',
        category: "Cap",
        price: 12.99,
        imagePaths: ["public/images/BlackCap1.png"],
        description: "Top off your look with the Stage Fright black cap. Featuring an adjustable strap and sleek embroidered logo, it’s a must-have for fans wanting to rep their favorite band everywhere they go.",
    }
]
