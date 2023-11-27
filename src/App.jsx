import React from "react"
import Image from "../images/image-qr-code.png"

const App = () => {
  return (
    <div className=" bg-Light_gray w-screen h-screen flex justify-center items-center ">
      <div className="bg-White w-[250px] h-[410px] rounded-3xl shadow-lg">
        <img src={Image} alt="qr code" className=" p-5 rounded-[30px]" />
        <div className="flex flex-col justify-center items-center text-center font-display mx-4">
          <h3 className="font-bold mb-2 text-Dark_blue text-lg leading-5">
            Improve your front-end <br /> skills by building projects
          </h3>
          <p className="text-[15px] text-center text-Grayish_blue">
            Scan the QR code to visit Frontend Mentor and take our coding skills
            to the next level
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
