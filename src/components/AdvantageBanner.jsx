import React from 'react'
import { WhyCreateX } from '../data'

function AdvantageBanner() {
  return (
    <>
    <main>
        <div className="container">
            <div className="advantage-banner">
                <img src="/images/bannerbottomimage.png" width={600} height={480} alt="" />
                <div className="advantage-banner__content">
                    <h2>Who we are</h2>
                    <h1>Why Createx?</h1>
                    {
                       WhyCreateX.map((item) =>{
                        return (
                            <div key={item.id} className="check">
                                <img src={item.img} alt="" />
                                <p>{item.title}</p>
                            </div>
                        )

                       })
                    }
                    <button>More about us</button>
                </div>
            </div>
        </div>
    </main>

    </>
  )
}

export default AdvantageBanner