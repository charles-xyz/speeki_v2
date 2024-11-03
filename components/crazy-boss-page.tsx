/* eslint-disable */

'use client'

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Phone, PhoneOff } from "lucide-react"
import Link from "next/link"
import Millis from '@millisai/web-sdk'
import Timer from './timer'

export function CrazyBossPage() {
    const [isCallActive, setIsCallActive] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false);
    const public_api_key = process.env.NEXT_PUBLIC_MILLIS_PUBLIC_KEY || "";


    const toggleCall = () => {
        setIsCallActive(!isCallActive)
    }

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

// @ts-ignore
    const [client, setClient] = useState<any>(null);

    useEffect(() => {
        try {
        const msClient = Millis.createClient({publicKey: public_api_key});
        setClient(msClient);

        msClient.on("onopen", () => console.log("Connected to Millis AI"));
        msClient.on("onready", () => console.log("Millis AI Ready"));
        msClient.on("onerror", (err) => {
            console.error("Millis AI Error:", err);
        });

        return () => {
            if (msClient) {
            msClient.stop();
            }
        };
        } catch (err) {
        console.error("Error initializing Millis AI client:", err);
        }
    }, []);

    const startConversation = () => {
        if (client) {
        try {
            client.start('-OA4JD1HZ9XodpTRbAts');
        } catch (err) {
            console.error("Error starting conversation:", err);
        }
        } else {
        console.error("Client not initialized");
        }
    };

    const endConversation = () => {
        if (client) {
            try {
            client.stop()
            } catch(err) {
            console.error(err)
            }
        }
        }

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
        {/* Full-screen geometric pattern overlay */}
        <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
        </div>

        <header className="px-4 py-4 flex items-center justify-between relative z-10">
            <Link className="flex items-center justify-center" href="#">
            <Phone className="h-6 w-6 text-cyan-400" />
            <span className="ml-2 text-xl font-bold text-white">SPEEKI</span>
            </Link>
        </header>

        <main className="flex-1 relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8 my-10 w-full max-w-md">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
                Call <span className="text-cyan-400">Ben</span>
            </h1>
            
            <div className={`relative w-full transition-all duration-500 bg-gray-800 rounded-lg overflow-hidden shadow-lg ${isExpanded ? 'h-96' : 'h-64'}`}>
                <img
                src="crazy_boss.jpg"
                alt="Video feed"
                className="object-cover w-full h-full"
                style={{ width: '600px' }}
                />

                {isCallActive && (
                <Timer/>
                )}
            </div>

            <div className="flex justify-center space-x-4">
                <Button
                size="lg"
                className={` rounded-full p-4 ${isCallActive ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'}`}
                onClick={() => {
                    toggleCall();
                    handleToggle();
                    {isCallActive ? endConversation() : startConversation()}
                }}>
                {isCallActive ? <PhoneOff className="h-6 w-6" /> : <Phone className="h-6 w-6" />}
                </Button>
            </div>
            </div>
        </main>

        <footer className="relative z-10 border-t border-gray-700 mt-auto">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
            <div className="mt-8 md:mt-0 md:order-1">
                <p className="text-center text-base text-gray-400">
                &copy; 2024 SPEEKI. All rights reserved.
                </p>
            </div>
            </div>
        </footer>
        </div>
    )
    }