import React, { useState } from 'react'
import axios from 'axios'
import Img1HomePage from '../assets/img/hp1.jpg'
import Img2HomePage from '../assets/img/hp2.jpg'
import Img3HomePage from '../assets/img/hp3.jpg'
import Img4HomePage from '../assets/img/hp4.jpg'
import Img5HomePage from '../assets/img/hp5.jpg'


const HomePage = () => {


    return (
        <div className=' flex flex-col items-center gap-8 mt-10 '>

            <img
                src={Img1HomePage}
                alt="image 1"
                className=" h-5/6 w-10/12 relative"
            />
            <div className=' bg-slate-200 rounded-xl p-12 '>
                <h1 className='text-4xl mx-auto'>Welcome to Social Circle</h1>
            </div>


        </div>

    )
}

export default HomePage