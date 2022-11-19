import image1 from './images/mountain.png';
import image2 from './images/sydney.png';
import image3 from './images/river.png';

const data = [
    
    {
        id: 1,
        img : image1,
        location: 'japan',
        title: 'Mount Fuji',
        startDate: '12 Jan, 2021',
        endDate: '24 Jan, 2021',
        googleMapsUrl:  'https://goo.gl/maps/VPaoZ7UP8iY3QwDLA',
        text: 'Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.'
    },
    {
        id: 2,
        img : image2,
        location: 'australia',
        title: 'Sydney Opera House',
        startDate: '27 May, 2021',
        endDate: ' 8 Jun, 2021',
        googleMapsUrl: 'https://goo.gl/maps/8QjzmUyZTanDWxiX8',
        text: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings"
    },
    {
        id: 3,
        img : image3,
        location: 'norway',
        title: 'Geirangerfjord',
        startDate: '01 Oct, 2021',
        endDate: '18 Nov, 2021',
        googleMapsUrl:  'https://goo.gl/maps/eYUYrL6aEnbMVxj29',
        text: 'The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.'
    }
]

export default data;