"use client"
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import quentinjpg from "@/public/img/quentin.jpg";

const ProfilePictureEditor = () => {
    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const imageContainerRef = useRef(null);

    const handleZoom = (e) => {
        const newScale = parseFloat(e.target.value);
        setScale(newScale);
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setDragStart({
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        });
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;

        setPosition({
            x: e.clientX - dragStart.x,
            y: e.clientY - dragStart.y,
        });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        document.addEventListener("mouseup", handleMouseUp);
        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mouseup", handleMouseUp);
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, [isDragging, dragStart]);

    return (
        <div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                    Zoom
                </label>
                <input
                    type="range"
                    min="1"
                    max="3"
                    step="0.1"
                    value={scale}
                    onChange={handleZoom}
                    className="w-full"
                />
            </div>

            <div
                ref={imageContainerRef}
                className="relative w-64 h-64 overflow-hidden rounded-full border-2 border-gray-300 cursor-move"
                onMouseDown={handleMouseDown}
            >
                <div
                    className="absolute w-full h-full"
                    style={{
                        transform: `scale(${scale}) translate(${
                            position.x / scale
                        }px, ${position.y / scale}px)`,
                        transformOrigin: "center",
                    }}
                >
                    <Image
                        src={quentinjpg}
                        alt="Profile picture"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            <div className="mt-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded">
                    Sauvegarder
                </button>
            </div>
        </div>
    );
};

export default ProfilePictureEditor;
