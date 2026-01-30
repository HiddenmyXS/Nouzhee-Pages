"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Home,
    Menu,
    X,
    Calendar,
} from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiUserCommunityFill, RiUserCommunityLine } from "react-icons/ri";
import { GrGallery } from "react-icons/gr";
import { IoInformation } from "react-icons/io5";

// Mobile Menu
const MobileMenu: React.FC<{
    open: boolean;
    onClose: () => void;
}> = ({ open, onClose }) => {
    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex"
                >
                    <div className="ml-auto w-80 mb-5 bg-gray-900 shadow-lg h-screen flex flex-col rounded-xl">
                        <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
                            <Link href="/home" onClick={onClose} className="flex items-center gap-3">
                                <Image
                                    src="./logos.svg"
                                    alt="Nouzhee Logo"
                                    width={54}
                                    height={54}
                                    priority
                                />
                                <span className="text-lg font-bold text-white">Nouzhee</span>
                            </Link>
                            <button
                                aria-label="Close menu"
                                onClick={onClose}
                                className="text-white p-2"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <nav className="flex flex-col gap-2 p-4 text-gray-100">
                            <Link
                                href="/home"
                                onClick={onClose}
                                className="flex items-center gap-2 py-2 hover:text-cyan-400 transition-colors"
                            >
                                <Home className="w-5 h-5" />
                                <span>Home</span>
                            </Link>

                            <Link
                                href="/community"
                                onClick={onClose}
                                className="flex items-center gap-2 py-2 hover:text-cyan-400 transition-colors"
                            >
                                <RiUserCommunityFill className="w-5 h-5" />
                                <span>Community</span>
                            </Link>

                            <Link
                                href="/events"
                                onClick={onClose}
                                className="flex items-center gap-2 py-2 hover:text-cyan-400 transition-colors"
                            >
                                <Calendar className="w-5 h-5" />
                                <span>Event Calendar</span>
                            </Link>

                            <Link
                                href="/gallery"
                                onClick={onClose}
                                className="flex items-center gap-2 py-2 hover:text-cyan-400 transition-colors"
                            >
                                <GrGallery className="w-5 h-5" />
                                <span>Gallery</span>
                            </Link>

                            <Link
                                href="/linkpage"
                                onClick={onClose}
                                className="flex items-center gap-2 py-2 hover:text-cyan-400 transition-colors"
                            >
                                <IoInformation className="w-5 h-5" />
                                <span>About Us</span>
                            </Link>
                        </nav>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default function Header(): React.ReactElement {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 z-40 right-0 flex items-center justify-center px-2 pt-2">
            <div className="flex items-center justify-between w-full max-w-8xl gap-6 p-4 md:p-3">
                {/* Logo Section */}
                <div className="flex items-center gap-3">
                    <Link href="/home" className="flex items-center gap-2">
                        <Image
                            src="./logos.svg"
                            alt="Nouzhee Logo"
                            width={66}
                            height={66}
                            priority
                        />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav
                    className="hidden md:flex items-center justify-end flex-1 gap-6 mr-8"
                    aria-label="Main navigation"
                >
                    <div className="flex items-center gap-6 text-gray-100">
                        <Link
                            href="/home"
                            className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
                        >
                            <Home
                                className="w-4 h-4"
                                aria-hidden="true"
                            />
                            <span>Home</span>
                        </Link>

                        <Link
                            href="/community"
                            className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
                        >
                            <RiUserCommunityLine className="w-4 h-4" aria-hidden="true" />
                            <span>Community</span>
                        </Link>

                        <Link
                            href="/events"
                            className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
                        >
                            <Calendar className="w-4 h-4" aria-hidden="true" />
                            <span>Event Calendar</span>
                        </Link>

                        <Link
                            href="/gallery"
                            className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
                        >
                            <GrGallery className="w-4 h-4" aria-hidden="true" />
                            <span>Gallery</span>
                        </Link>

                        <Link
                            href="/linkpage"
                            className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
                        >
                            <IoInformation className="w-4 h-4" aria-hidden="true" />
                            <span>About Us</span>
                        </Link>
                    </div>
                </nav>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden flex items-center justify-center p-2 text-white"
                    aria-label="Open menu"
                    onClick={() => setMobileOpen(true)}
                >
                    <Menu className="w-7 h-7" />
                </button>
            </div>

            {/* Mobile Menu Drawer */}
            <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
        </header>
    );
}