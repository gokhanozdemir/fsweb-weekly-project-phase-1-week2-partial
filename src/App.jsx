import { useState, useEffect } from 'react'

import beige from './assets/color-button/beige.png'
import grayWhite from './assets/color-button/gray-white.png'
import green from './assets/color-button/green.png'
import navyGreen from './assets/color-button/navy-green.png'
import whiteSchool from './assets/color-button/white-school.png'

import './App.css'

const variantsData = [
  {
    title: "Bej",
    previewImg: "beige.png",
    selectorImg: beige
  },
  {
    title: "Gri Beyaz",
    previewImg: "gray-white.png",
    selectorImg: grayWhite,
    double: true
  },
  {
    title: "Yeşil",
    previewImg: "green.png",
    selectorImg: green
  },
  {
    title: "Lacivert Yeşil",
    previewImg: "navy-green.png",
    selectorImg: navyGreen,
    double: true
  },
  {
    title: "Lacivert Okul Markalı",
    previewImg: "white-school.png",
    selectorImg: whiteSchool,
    double: true
  },
  {
    title: "Bej",
    previewImg: "beige.png",
    selectorImg: beige
  },
  {
    title: "Gri Beyaz",
    previewImg: "gray-white.png",
    selectorImg: grayWhite,
    double: true
  },
  {
    title: "Yeşil",
    previewImg: "green.png",
    selectorImg: green
  },
  {
    title: "Lacivert Yeşil",
    previewImg: "navy-green.png",
    selectorImg: navyGreen,
    double: true
  },
  {
    title: "Lacivert Okul Markalı",
    previewImg: "white-school.png",
    selectorImg: whiteSchool,
    double: true
  },
  {
    title: "Bej",
    previewImg: "beige.png",
    selectorImg: beige
  },
  {
    title: "Gri Beyaz",
    previewImg: "gray-white.png",
    selectorImg: grayWhite,
    double: true
  },
  {
    title: "Yeşil",
    previewImg: "green.png",
    selectorImg: green
  },
  {
    title: "Lacivert Yeşil",
    previewImg: "navy-green.png",
    selectorImg: navyGreen,
    double: true
  },

]
const productData = {
  title: "Kapşonlu Sweatshirt",
  price: 70,
  properties: [
    // radio, image, dropdown, color, 
    // price Modifier nereye tanımlanabilir?
    { type: "radio", user: ["Çocuk", "Yetişkin"] },
    { type: "radio", sizes: ["S", "M", "L", "XL", "XXL", "XXXL"], },
    { type: "image", variants: variantsData },
    { type: "dropdown", delivery: ["Kargo", "Yurtiçi Kargo", "Aras Kargo", "MNG Kargo"] }
  ],
  sizes: ["S", "M", "L", "XL", "XXL", "XXXL"]
}

function App() {
  const [product, setProduct] = useState(productData)
  const [variant, setVariant] = useState(variantsData[0])
  const [size, setSize] = useState(product.sizes[0])
  const [priceCalculation, setPriceCalculation] = useState(product.price)

  function calculatePrice(basePrice, selectedVariant, selectedSize) {
    let price = basePrice
    if (selectedVariant.double) {
      price = price * 1.05
    }
    price = price + (product.sizes.indexOf(selectedSize) * 0.1 * price)
    return price
  }

  useEffect(() => {
    const cal = calculatePrice(product.price, variant, size)
    setPriceCalculation(cal.toFixed(2))
  }, [variant, size])

  return (
    <>
      <div className='app-container' >
        <div className='app--panel'>Sol Ana Resim Paneli
          <div className='image-container'>
            <img src={`./assets/variations/${variant.previewImg}`} alt="" />
          </div>
        </div>
        <div className='app--panel'>
          <div className='details-container'>
            <h2>{product.title} - {variant.title}</h2>
            <div>${priceCalculation}</div>
            <div>

              <p>Renk Seçimi</p>
              {(product.properties[2].type === 'image') && <div className='color-variants'>
                {product.properties[2].variants.map((v, ind) => (
                  <img key={ind} onClick={() => setVariant(v)} src={`${v.selectorImg}`} alt={`${v.title} renkteki varyasyonu göster`} />
                ))}
              </div>}

            </div>
            <div>
              <p>Beden Seçimi</p>
              <div className='size-variants'>
                {product.sizes.map((s, ind) => (
                  <div key={ind} onClick={() => setSize(s)} className={`size ${s === size ? 'selected' : ''}`}>{s}</div>
                ))}
              </div>
            </div>
            <div>alan 4</div>
            <div>alan 5</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
