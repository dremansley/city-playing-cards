import React, { useEffect } from "react";
import Map from "./Map.jsx";
import {IconButton, Typography} from "@mui/material";
import {CloseOutlined} from "@mui/icons-material";

const CardDetails = ({ isOpen, onClose }) => {

    if (!isOpen) return null;

    return (
        <div className="relative">
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm" style={{position:"fixed", top:0, left:0,zIndex:9999 }}>
                <div className="relative w-full max-w-3xl p-6 bg-white rounded-lg shadow-lg md:p-8">
                    <button
                        className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                        onClick={onClose}
                    >
                        <IconButton><CloseOutlined/></IconButton>
                    </button>

                    <div className="flex flex-col items-center md:flex-row">
                        <div className="w-full md:w-1/2 mb-6 md:mb-0 md:pr-6">
                            <img
                                src="https://via.placeholder.com/400"
                                alt="Sample"
                                className="w-full h-auto rounded-lg shadow-md"
                            />
                        </div>

                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">
                                Card Title
                            </h2>
                            <p className="mt-4 text-gray-600 text-lg">
                               Card Details will be shown here
                            </p>

                            <a
                                href="https://www.example.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-6 px-6 py-2 text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-md shadow-md hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 transition duration-300 ease-in-out"
                            >
                                Visit Website
                            </a>

                        </div>
                    </div>
                    <Typography variant="h6" sx={{my: 2, mb: 0, pb: 0, fontWeight: 600}}>Location</Typography>

                    <Map/>

                </div>
            </div>
        </div>
    );
};

export default CardDetails;
