import { useState, useEffect } from 'react'

// import beige from './assets/color-button/beige.png'
// import grayWhite from './assets/color-button/gray-white.png'
// import green from './assets/color-button/green.png'
// import navyGreen from './assets/color-button/navy-green.png'
// import whiteSchool from './assets/color-button/white-school.png'

import { productData } from './productData'

import './App.css'



function App() {
  const [product, setProduct] = useState(productData)
  // ilk bulduğum image variantını seçtim ve preview olarak kullandım. 
  // API da preview'da olacak image'ı bana böyle bir şekilde veriyor varsayıyorum.
  const previewImage = product.properties.find(prp => prp.type === 'image').variants[0]
  const [variant, setVariant] = useState(previewImage)
  // const [size, setSize] = useState(product.sizes[0])
  const [priceCalculation, setPriceCalculation] = useState(product.price)

  // function calculatePrice(basePrice, selectedVariant, selectedSize) {
  //   let price = basePrice
  //   if (selectedVariant.double) {
  //     price = price * 1.05
  //   }
  //   price = price + (product.sizes.indexOf(selectedSize) * 0.1 * price)
  //   return price
  // }

  // useEffect(() => {
  //   const cal = calculatePrice(product.price, variant, size)
  //   setPriceCalculation(cal.toFixed(2))
  // }, [variant, size])

  return (
    <>
      <div className='app-container' >
        <div className='app--panel'>Sol Ana Resim Paneli
          <div className='image-container'>
            <img src={`${variant.imageUrl}`} alt={`${product.title} - ${variant.label}`} />
          </div>
        </div>
        <div className='app--panel'>
          <div className='details-container'>
            <h2>{product.title} - {variant.title}</h2>
            <div>${priceCalculation}</div>
            <div>
              {
                product.properties.map((prp, ind) => {
                  return (<div key={ind}>
                    {/*
                     // TODO 
                    Burası switch olarak güncellenebilir mi?
                     */}
                    {/* radio selector */}
                    {prp.type === 'radio' && <div>
                      <h3>{prp.label}</h3>
                      {prp.variants.map((v, ind) => (
                        <div key={ind}>
                          <label htmlFor={v.label}>
                            <input type="radio" name={prp.label} id={v.label} value={v.value} />
                            {v.label}</label>
                        </div>
                      ))}
                    </div>}

                    {/* dropdown selector */}
                    {prp.type === 'dropdown' &&
                      <div className=''>
                        <label>
                          <h3>{prp.label}</h3>
                          <select name={prp.label}>
                            {prp.variants.map((v, ind) => (
                              <option key={ind} value={v.value}>{v.label}</option>
                            ))}
                          </select>
                        </label>
                      </div>
                    }

                    {/* image selector */}
                    {prp.type === 'image' && <div>
                      <h3>{prp.label}</h3>
                      <div className='color-variants'>
                        {prp.variants.map((v, ind) => (
                          <img key={ind}
                            onClick={() => setVariant(v)}
                            src={`${v.buttonImage}`}
                            alt={`${v.label} resmindeki örneği görüntüle`}
                          />
                        ))}
                      </div>
                    </div>}


                  </div>)

                })
              }


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
