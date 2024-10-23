import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";



const  ApiData = {
    url:'https://nasmart.online/',
    Consumerkey :'ck_2d9797a233c217ae3d6022615eeccf667d9112a9',
    Consumersecret :'cs_cdcf4301855e3496904654d90a4008a11eeeae75',
    currency_ar:'درهم',
    currency_en:'AED',
    description:'Online Store For Best Brand Electronics',
    contact:[
         {
            'id':1,
            'icon':<MdOutlineEmail size={25} />,
            'value':'sales@nasmart.online',
         },
         {
            'id':2,
            'icon':<FaPhone size={25} />,
            'value':'+971589107126',
         },
         {
            'id':3,
            'icon':<FaWhatsapp size={25} />,
            'value':'+971589107126',

         }
    ]
}
export default ApiData