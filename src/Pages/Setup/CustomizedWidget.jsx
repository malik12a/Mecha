import React, { useState, useRef } from "react";
import { assets } from "../../assets/assets";
import Nav2 from "../../Components/Nav2";
import { useAppContext } from "../../context/AppContext";

const CustomizeWidget = () => {
  const navItems = [
    { label: "1.Basic setup", to: "/basic-setup" },
    { label: "2.Add training data", to: "/training-data" },
    { label: "3.Customize widget", to: "/customize-widget" },
  ];
  const { navigate } = useAppContext();
  const [hue, setHue] = useState(147);
  const [saturation, setSaturation] = useState(50);
  const [uploadedFile, setUploadedFile] = useState(null);

  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
      console.log("Uploaded file:", file.name);
      // You can also add file preview or upload logic here
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-[#f6f7ff] p-6 flex flex-col">
      {/* Navbar */}
      <Nav2 navItems={navItems} logo={assets.blacklogo} />

      {/* Main Content */}
      <div className="flex-1 flex items-start justify-start ml-20 mt-15 px-10">
        <div>
          <h3 className="font-montserrat text-sm">Step 3 of 3</h3>
          <h1 className="font-montserrat font-bold text-2xl mt-2 mb-15">
            Customize your bot
          </h1>

          {/* Hue Slider */}
          <div className="mt-6">
            <label className="text-sm font-medium">Hue</label>
            <div className="flex items-center gap-2">
              <input
                type="range"
                min="0"
                max="360"
                value={hue}
                onChange={(e) => setHue(e.target.value)}
                className="w-[300px] h-2 appearance-none rounded-lg"
                style={{
                  background:
                    "linear-gradient(to right, magenta, blue, cyan, green, yellow, red)",
                }}
              />
              <span className="text-sm">{hue}</span>
            </div>
          </div>

          {/* Saturation Slider */}
         <div className="mt-4">
  <label className="block text-sm font-medium mb-2">Saturation</label>
  <input
    type="range"
    min="0"
    max="100"
    value={saturation}
    onChange={(e) => setSaturation(e.target.value)}
    className="w-[300px] h-2 appearance-none rounded-lg bg-gradient-to-r from-gray-400 to-blue-600"
  />
</div>


          {/* Upload Button */}
          <div className="mt-6">
            <button
              type="button"
              onClick={() => fileInputRef.current.click()}
              className="bg-[#7a88ff] p-6 rounded-lg flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v4h16v-4M12 12V4m0 0l-4 4m4-4l4 4"
                />
              </svg>
            </button>

            {/* Hidden File Input */}
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileUpload}
              className="hidden"
            />

            {/* Show file name if uploaded */}
            {uploadedFile && (
              <p className="mt-2 text-sm text-gray-600">
                Selected file: {uploadedFile.name}
              </p>
            )}
          </div>

          {/* Next Button */}
          
          <button
            onClick={() => navigate("/dashboard")}
            className="border-2 border-[#979ffa] mt-14 w-30 h-10 rounded-full hover:scale-105 transition-transform"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomizeWidget;
