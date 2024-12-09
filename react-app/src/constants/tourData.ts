import { Tour } from "../types/Tour";


export const TOUR_DATA: Tour[] = 
[
    { 
        name: 'Lucas Oil Stadium',
        linkName: 'lucas-oil-stadium',
        address: '500 South Capitol Avenue',
        location: 'Indianapolis, Indiana',
        date: new Date('2025-03-31'),
        startTime: '1:30 PM',
        endTime: '4:30 PM',
        images: [
            { path: 'LucasOilStadium/1', link: 'https://commons.wikimedia.org/w/index.php?curid=62118315', creditText: "By Carol M. Highsmith, Public Domain" }, 
            { path: 'LucasOilStadium/2', link: 'https://commons.wikimedia.org/w/index.php?curid=153529692', creditText: "By SounderBruce - Own work, CC BY-SA 4.0" }, 
            { path: 'LucasOilStadium/3', link: 'https://commons.wikimedia.org/w/index.php?curid=5137707', creditText: "By myself (User:Piotrus) - Self-photographed, CC BY-SA 3.0" }
        ],
        availibleTickets: 122,
        organizer: '',
        description: '',
        ticketPrice: 64.99,
    },
    { 
        name: 'Notre Dame Stadium',
        linkName: 'notre-dame-stadium',
        address: '2010 Moose Krause Circle',
        location: 'Notre Dame, Indiana',
        date: new Date('2025-04-14'),
        startTime: '5:00 PM',
        endTime: '8:30 PM',
        images: [
            { path: 'NotreDameStadium/1', link: 'https://commons.wikimedia.org/w/index.php?curid=113137084', creditText: "By Eccekevin - Own work, CC BY-SA 4.0" }, 
            { path: 'NotreDameStadium/2', link: 'https://www.flickr.com/photos/jck_photos/4940503574/in/photolist-8wznA7-8Ac4y7-72mvSV-9pqagp-8wwnXX-buNRP5-gaQ2ma-gaP2J8-5ouFfk-dogmQH-bHHCCr-DFUMqv-8Ga7vk-7U1R98-7U558h-rPiLx-3bnkt1-72qvGu-7U1RnH-7U1Rxx-p3R2d-Cp2Sq-72qvVC-p3R2b-D8kiDR-D8jK5c-7U51BY-72qvud-72mv5M-DeNa7w-DDAvHY-CJw4sp-CJw42p-DxDvrk-DFUQEg-Dvv2i5-D8qm4v-DxDr9H-DvuXc9-DeN2mw-CJp9jo-CJp8pC-D8qgSz-DxDmVx-DFUFWV-DeMYAG-7U54KN-72muWT-3bovtY-CJp3gS, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=46975257', creditText: "By PROjck_photos" }, 
            { path: 'NotreDameStadium/3', link: 'https://commons.wikimedia.org/w/index.php?curid=113137093', creditText: "By Eccekevin - Own work, CC BY-SA 4.0" }, 
            { path: 'NotreDameStadium/4', link: 'https://commons.wikimedia.org/w/index.php?curid=24966893', creditText: "By MrCalifornia at English Wikipedia, Public Domain" }
        ],
        availibleTickets: 305,
        organizer: '',
        description: '',
        ticketPrice: 34.99,
    },
    {
        name: 'Allen County War Memorial Coliseum',
        linkName: 'allen-county-war-memorial-coliseum',
        address: '4000 Parnell Avenue',
        location: 'Fort Wayne, Indiana',
        date: new Date('2025-04-21'),
        startTime: '5:00 PM',
        endTime: '8:30 PM',
        images: [
            { path: 'WarMemorialColiseum/1', link: 'https://commons.wikimedia.org/w/index.php?curid=6909331', creditText: 'By FTSKfan at English Wikipedia - Transferred from en.wikipedia to Commons by Firefox13 using CommonsHelper., Public Domain' },
            { path: 'WarMemorialColiseum/2', link: 'https://commons.wikimedia.org/w/index.php?curid=89534539', creditText: 'By Brycesteiner - Own work, CC BY-SA 4.0' }
        ],
        availibleTickets: 112,
        organizer: '',
        description: '',
        ticketPrice: 39.99,
    },
    {
        name: 'Ford Center',
        linkName: 'ford-center',
        address: '1 Southeast Martin Luther King Jr. Boulevard',
        location: 'Evansville, Indiana',
        date: new Date('2025-04-28'),
        startTime: '2:00 PM',
        endTime: '6:00 PM',
        images: [
            { path: 'FordCenter/1', link: 'https://commons.wikimedia.org/w/index.php?curid=48100052', creditText: 'By Nyttend - Own work, Public Domain' },
            { path: 'FordCenter/2', link: 'https://commons.wikimedia.org/w/index.php?curid=17261729', creditText: 'By Indymac5 - Own work, CC BY-SA 3.0' }
        ],
        availibleTickets: 230,
        organizer: '',
        description: '',
        ticketPrice: 44.99,
    },
]