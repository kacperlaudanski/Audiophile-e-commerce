import { randomIdGenerator } from '../../../utilities/currencyFormatter'
//Headphones
 //XX59
import XX59MainImage from '../../../images/product-xx59-headphones/desktop/image-product.jpg'
import XX59GalleryImage1 from '../../../images/product-xx59-headphones/desktop/image-gallery-1.jpg'
import XX59GalleryImage2 from '../../../images/product-xx59-headphones/desktop/image-gallery-2.jpg'
import XX59GalleryImage3 from '../../../images/product-xx59-headphones/desktop/image-gallery-3.jpg'
 //XX99MarkI
import XX99MarkOneMainImage from '../../../images/product-xx99-mark-one-headphones/desktop/image-product.jpg'
import XX99MarkOneGalleryImage1 from '../../../images/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg'
import XX99MarkOneGalleryImage2 from '../../../images/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg'
import XX99MarkOneGalleryImage3 from '../../../images/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg'
 //XX99MarkII
import XX99MarkTwoMainImage from '../../../images/product-xx99-mark-two-headphones/desktop/image-product.jpg'
import XX99MarkTwoGalleryImage1 from '../../../images/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg'
import XX99MarkTwoGalleryImage2 from '../../../images/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg'
import XX99MarkTwoGalleryImage3 from '../../../images/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg'
//Speakres
 //ZX9
import ZX9MainImage from '../../../images/product-zx9-speaker/desktop/image-product.jpg'
import ZX9GalleryImage1 from '../../../images/product-zx9-speaker/desktop/image-gallery-1.jpg'
import ZX9GalleryImage2 from '../../../images/product-zx9-speaker/desktop/image-gallery-2.jpg'
import ZX9GalleryImage3 from '../../../images/product-zx9-speaker/desktop/image-gallery-3.jpg'
 //ZX7
import ZX7MainImage from '../../../images/product-zx7-speaker/desktop/image-product.jpg'
import ZX7GalleryImage1 from '../../../images/product-zx7-speaker/desktop/image-gallery-1.jpg'
import ZX7GalleryImage2 from '../../../images/product-zx7-speaker/desktop/image-gallery-2.jpg'
import ZX7GalleryImage3 from '../../../images/product-zx7-speaker/desktop/image-gallery-3.jpg'
//Earphones
 //YX1
import YX1MainImage from '../../../images/product-yx1-earphones/desktop/image-product.jpg'
import YX1GalleryImage1 from '../../../images/product-yx1-earphones/desktop/image-gallery-1.jpg'
import YX1GalleryImage2 from '../../../images/product-yx1-earphones/desktop/image-gallery-2.jpg'
import YX1GalleryImage3 from '../../../images/product-yx1-earphones/desktop/image-gallery-3.jpg'



export const headphonesList = [
  {
    id: randomIdGenerator(),
    product: 'xx99markII',
    shortLink: "./xx99markII",
    link: "../headphones/xx99markII",  
    mainImage: XX99MarkTwoMainImage,
    galleryImage1: XX99MarkTwoGalleryImage1, 
    galleryImage2: XX99MarkTwoGalleryImage2, 
    galleryImage3: XX99MarkTwoGalleryImage3, 
    name: "XX99 MARK II HEADPHONES",
    shortName: "XX99 MARK II",
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    price: 2999,
    featuresParagraphI:
      "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.",
    featuresParagraphII:
      "The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
    boxContent: [
      {
        pieces: 1,
        boxItem: "Headphone Unit",
      },
      {
        pieces: 2,
        boxItem: "Replacement Earcups",
      },
      {
        pieces: 1,
        boxItem: "User Manual",
      },
      {
        pieces: 1,
        boxItem: "3.5mm 5m Audio Cable",
      },
      {
        pieces: 1,
        boxItem: "Travel Bag",
      },
    ],
    productPreviewReverse: null
  },
  {
    id: randomIdGenerator(),
    shortLink: "./xx99markI",
    product: 'xx99markI',
    link: "../headphones/xx99markI",   
    mainImage: XX99MarkOneMainImage, 
    galleryImage1: XX99MarkOneGalleryImage1, 
    galleryImage2: XX99MarkOneGalleryImage2, 
    galleryImage3: XX99MarkOneGalleryImage3, 
    name: "XX99 MARK I HEADPHONES",
    shortName: "XX99 MARK I",
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    price: 1750,
    featuresParagraphI:
      "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.",
    featuresParagraphII:
      "From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.",
    boxContent: [
      {
        pieces: 1,
        boxItem: "Headphone Unit",
      },
      {
        pieces: 2,
        boxItem: "Replacement Earcups",
      },
      {
        pieces: 1,
        boxItem: "User Manual",
      },
      {
        pieces: 1,
        boxItem: "3.5mm 5m Audio Cable",
      },
    ],
    productPreviewReverse: 'reverse'
  },
  {
    id: randomIdGenerator(),
    product: 'xx59',
    shortLink: "./xx59",
    link: "../headphones/xx59",   
    mainImage: XX59MainImage, 
    galleryImage1: XX59GalleryImage1, 
    galleryImage2: XX59GalleryImage2, 
    galleryImage3: XX59GalleryImage3, 
    name: "XX59 HEADPHONES",
    shortName: "XX59",
    description:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    price: 899,
    featuresParagraphI:
      "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.",
    featuresParagraphII:
      "More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
    boxContent: [
      {
        pieces: 1,
        boxItem: "Headphone Unit",
      },
      {
        pieces: 2,
        boxItem: "Replacement Earcups",
      },
      {
        pieces: 1,
        boxItem: "User Manual",
      },
      {
        pieces: 1,
        boxItem: "3.5mm 5m Audio Cable",
      },
    ],
    productPreviewReverse: null
  },
];

export const speakersList = [
  {
    id: randomIdGenerator(),
    product: 'zx9',
    shortLink: "./zx9",
    link: "../speakers/zx9", 
    mainImage: ZX9MainImage, 
    galleryImage1: ZX9GalleryImage1, 
    galleryImage2: ZX9GalleryImage2, 
    galleryImage3: ZX9GalleryImage3, 
    name: "ZX9 SPEAKER",
    shortName: "ZX9",
    description:
      "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    price: 4500,
    featuresParagraphI:
      "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).",
    featuresParagraphII:
      "Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
    boxContent: [
      {
        pieces: 2,
        boxItem: "Speaker Unit",
      },
      {
        pieces: 2,
        boxItem: "Speaker Cloth Panel",
      },
      {
        pieces: 1,
        boxItem: "User Manual",
      },
      {
        pieces: 1,
        boxItem: "3.5mm 5m Audio Cable",
      },
      {
        pieces: 1,
        boxItem: "10m Optical Cable",
      },
    ],
    productPreviewReverse: null
  },
  {
    id: randomIdGenerator(),
    product: 'zx7',
    shortLink: "./zx7",
    link: "../speakers/zx7",  
    mainImage: ZX7MainImage, 
    galleryImage1: ZX7GalleryImage1, 
    galleryImage2: ZX7GalleryImage2, 
    galleryImage3: ZX7GalleryImage3, 
    name: "ZX7 SPEAKER",
    shortName: "ZX7",
    description:
      "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    price: 3500,
    featuresParagraphI:
      "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.",
    featuresParagraphII:
      "The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",
    boxContent: [
      {
        pieces: 2,
        boxItem: "Speaker Unit",
      },
      {
        pieces: 2,
        boxItem: "Speaker Cloth Panel",
      },
      {
        pieces: 1,
        boxItem: "User Manual",
      },
      {
        pieces: 1,
        boxItem: "3.5mm 5m Audio Cable",
      },
      {
        pieces: 1,
        boxItem: "7.5m Optical Cable",
      },
    ],
    productPreviewReverse: 'reverse'
  },
]

export const earphonesList = [
  {
    id: randomIdGenerator(),
    product: 'yx1',
    shortLink: "./yx1",
    link: "../earphones/yx1", 
    mainImage: YX1MainImage, 
    galleryImage1: YX1GalleryImage1, 
    galleryImage2: YX1GalleryImage2,
    galleryImage3: YX1GalleryImage3, 
    name: "YX1 WIRELESS EARPHONES",
    shortName: "YX1",
    description:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    price: 599,
    featuresParagraphI:
      "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.",
    featuresParagraphII:
      "The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
    boxContent: [
      {
        pieces: 2,
        boxItem: "Earphone Unit",
      },
      {
        pieces: 6,
        boxItem: "Multi-size Earplugs",
      },
      {
        pieces: 1,
        boxItem: "User Manual",
      },
      {
        pieces: 1,
        boxItem: "USB-C Charging Cable",
      },
      {
        pieces: 1,
        boxItem: "Travel Pouch",
      },
    ],
    productPreviewReverse: null
  },
]