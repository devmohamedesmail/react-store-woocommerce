import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";



const  ApiData = {
    url:'https://nasmart.online/',
    Consumerkey :'ck_88286fdced06dac71f23112edd516bd72239faee',
    Consumersecret :'cs_b4d64a23ae0c943a0e3826eb32236cc52ca46eec',
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