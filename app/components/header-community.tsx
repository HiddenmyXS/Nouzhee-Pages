"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Home,
    List,
    Server,
    Code,
    Container,
    Gamepad2,
    Menu,
    X,
    Calendar,
} from "lucide-react";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiAccountCircle2Fill, RiAccountCircleFill, RiUserCommunityFill, RiUserCommunityLine } from "react-icons/ri";
import { GrGallery } from "react-icons/gr";
import { MdAccountCircle } from "react-icons/md";
import { IoInformation } from "react-icons/io5";

// HostProductsDropdown for desktop
const HostProductsDropdown: React.FC<{ onLinkClick?: () => void }> = ({
    onLinkClick,
}) => {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const handleClose = useCallback(() => setOpen(false), []);
    const handleToggle = useCallback(() => setOpen((prev) => !prev), []);

    useEffect(() => {
        const handleDocClick = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                handleClose();
            }
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                handleClose();
            }
        };

        document.addEventListener("mousedown", handleDocClick);
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("mousedown", handleDocClick);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleClose]);

    return (
        <div
            className="relative"
            ref={ref}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={open}
                onClick={handleToggle}
                className="flex items-center font-semibold gap-2 text-gray-300 hover:text-gray-50 transition-colors"
            >
                <List className="w-4 h-4" aria-hidden="true" />
                Host Products
                <svg
                    className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                >
                    <path d="M6 9l6 6 6-6" />
                </svg>
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.98 }}
                        transition={{ duration: 0.16, ease: "easeOut" }}
                        role="menu"
                        className="absolute left-1/2 -translate-x-1/2 top-12 w-96 bg-gray-900/95 backdrop-blur-sm shadow-xl border border-white/10 rounded-lg overflow-hidden z-50"
                    >
                        <div className="flex flex-col py-2">
                            <Link
                                href="/game-host"
                                role="menuitem"
                                onClick={() => {
                                    handleClose();
                                    onLinkClick?.();
                                }}
                                className="px-4 py-3 hover:bg-white/5 transition-colors"
                            >
                                <div className="flex items-start gap-4">
                                    <span className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-md bg-white/10 text-white">
                                        <Gamepad2 className="w-5 h-5" aria-hidden="true" />
                                    </span>
                                    <div className="min-w-0">
                                        <span className="text-sm font-medium text-white">
                                            Game Host
                                        </span>
                                        <p className="text-sm text-white/60 mt-1">
                                            Jalankan sesi game dengan performa tinggi pada host kami.
                                            Dikelola penuh dan siap pakai.
                                        </p>
                                    </div>
                                </div>
                            </Link>

                            <Link
                                href="/app-host"
                                role="menuitem"
                                onClick={() => {
                                    handleClose();
                                    onLinkClick?.();
                                }}
                                className="px-4 py-3 text-sm text-white hover:bg-white/5 transition-colors flex items-start gap-4"
                            >
                                <span className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-md bg-white/10 text-white">
                                    <Code className="w-5 h-5" aria-hidden="true" />
                                </span>
                                <div className="min-w-0">
                                    <span className="block text-sm font-medium">App Host</span>
                                    <p className="text-sm text-white/60 mt-1">
                                        Hosting aplikasi dengan environment khusus.
                                    </p>
                                </div>
                            </Link>

                            <Link
                                href="/private-node"
                                role="menuitem"
                                onClick={() => {
                                    handleClose();
                                    onLinkClick?.();
                                }}
                                className="px-4 py-3 text-sm text-white hover:bg-white/5 transition-colors flex items-start gap-4"
                            >
                                <span className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-md bg-white/10 text-white">
                                    <Server className="w-5 h-5" aria-hidden="true" />
                                </span>
                                <div className="min-w-0">
                                    <span className="block text-sm font-medium">
                                        Private Node
                                    </span>
                                    <p className="text-sm text-white/60 mt-1">
                                        Node khusus untuk kebutuhan privat dan kontrol penuh.
                                    </p>
                                </div>
                            </Link>

                            <Link
                                href="/vps"
                                role="menuitem"
                                onClick={() => {
                                    handleClose();
                                    onLinkClick?.();
                                }}
                                className="px-4 py-3 text-sm text-white hover:bg-white/5 transition-colors flex items-start gap-4"
                            >
                                <span className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-md bg-white/10 text-white">
                                    <Container className="w-5 h-5" aria-hidden="true" />
                                </span>
                                <div className="min-w-0">
                                    <span className="block text-sm font-medium">VPS</span>
                                    <p className="text-sm text-white/60 mt-1">
                                        Virtual private server untuk fleksibilitas dan skalabilitas.
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

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
                            <Link href="/community" onClick={onClose} className="flex items-center gap-3">
                                <Image
                                    src="/logos.svg"
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
                        <nav className="flex flex-col gap-2 p-4">
                            <Link
                                href="/home"
                                onClick={onClose}
                                className="flex items-center gap-2 text-gray-300 hover:text-gray-50 transition-colors py-2"
                            >
                                <Home className="w-5 h-5" />
                                <span className="font-semibold">Home</span>
                            </Link>

                            <Link
                                href="/community"
                                onClick={onClose}
                                className="flex items-center gap-2 text-gray-300 hover:text-gray-50 transition-colors py-2"
                            >
                                <RiUserCommunityFill className="w-5 h-5" />
                                <span className="font-semibold">Community</span>
                            </Link>

                            <Link
                                href="/events"
                                onClick={onClose}
                                className="flex items-center gap-2 text-gray-300 hover:text-gray-50 transition-colors py-2"
                            >
                                <Calendar className="w-5 h-5" />
                                <span className="font-semibold">Event Calendar</span>
                            </Link>

                            <Link
                                href="/gallery"
                                onClick={onClose}
                                className="flex items-center gap-2 text-gray-300 hover:text-gray-50 transition-colors py-2"
                            >
                                <GrGallery className="w-5 h-5" />
                                <span className="font-semibold">Gallery</span>
                            </Link>

                            <Link
                                href="/linkpage"
                                onClick={onClose}
                                className="flex items-center gap-2 text-gray-300 hover:text-gray-50 transition-colors py-2"
                            >
                                <IoInformation className="w-5 h-5" />
                                <span className="font-semibold">About Us</span>
                            </Link>
                            <div className="border-t border-white/10 my-2" />
                            <Link
                                href="/login"
                                onClick={onClose}
                                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-white transition-colors bg-white/10"
                            >
                                <RiAccountCircleFill className="w-5 h-5" />
                                <span className="font-semibold">Login</span>
                            </Link>
                            <Link
                                href="/register"
                                onClick={onClose}
                                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-white transition-colors bg-white/10"
                            >
                                <RiAccountCircle2Fill className="w-5 h-5" />
                                <span className="font-semibold">Register</span>
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
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-2 pt-2">
            <div className="flex items-center justify-between w-full max-w-8xl gap-6 p-4 md:p-3">
                {/* Logo Section */}
                <div className="flex items-center gap-3">
                    <Link href="/community" className="flex items-center gap-2">
                        <Image
                            src="/logos.svg"
                            alt="Nouzhee Logo"
                            width={66}
                            height={66}
                            priority
                        />
                    </Link>

                    <Link href="/community" className="flex items-center gap-2">
                        <Image
                            src="/Genesis.png"
                            alt="Genesis Logo"
                            width={56}
                            height={56}
                            priority
                        />
                    </Link>
                    
                </div>

                {/* Desktop Navigation */}
                <nav
                    className="hidden md:flex items-center justify-end flex-1 gap-6"
                    aria-label="Main navigation"
                >
                    <div className="flex items-center gap-6">
                        <Link
                            href="/home"
                            className="flex items-center gap-2 text-gray-300 hover:text-gray-50 transition-colors"
                        >
                            <Home className="w-4 h-4" aria-hidden="true" />
                            <span className="font-semibold">Home</span>
                        </Link>

                        <Link
                            href="/community"
                            className="flex items-center gap-2 text-gray-300 hover:text-gray-50 transition-colors"
                        >
                            <RiUserCommunityLine className="w-4 h-4" aria-hidden="true" />
                            <span className="font-semibold">Community</span>
                        </Link>

                        <Link
                            href="/events"
                            className="flex items-center gap-2 text-gray-300 hover:text-gray-50 transition-colors"
                        >
                            <Calendar className="w-4 h-4" aria-hidden="true" />
                            <span className="font-semibold">Event Calendar</span>
                        </Link>

                        <Link
                            href="/gallery"
                            className="flex items-center gap-2 text-gray-300 hover:text-gray-50 transition-colors"
                        >
                            <GrGallery className="w-4 h-4" aria-hidden="true" />
                            <span className="font-semibold">Gallery</span>
                        </Link>

                        <Link
                            href="/linkpage"
                            className="flex items-center gap-2 text-gray-300 hover:text-gray-50 transition-colors"
                        >
                            <IoInformation className="w-4 h-4" aria-hidden="true" />
                            <span className="font-semibold">About Us</span>
                        </Link>
                    </div>
                </nav>

                {/* Desktop Action Buttons */}
                <div className="hidden md:flex items-center gap-3">
                    <div className="w-px h-8 bg-white/30" aria-hidden="true" />

                    <Link
                        href="/game-panel"
                        className="relative group items-center gap-2 px-3 py-2 rounded-lg text-sm text-white transition-colors overflow-hidden"
                        aria-label="Open Game Panel"
                    >
                        <span className="absolute inset-0 bg-white/10 transform scale-x-0 origin-left transition-transform duration-200 ease-out group-hover:scale-x-100 rounded-lg" />
                        <span className="relative z-10 flex items-center gap-2">
                            <MdAccountCircle className="w-6 h-6" aria-hidden="true" />
                            <span className="font-semibold">Login</span>
                        </span>
                    </Link>

                    <Link
                        href="/client-area"
                        className="relative group items-center gap-2 px-3 py-2 rounded-lg text-sm text-white transition-colors overflow-hidden"
                        aria-label="Open Client Area"
                    >
                        <span className="absolute inset-0 bg-white/10 transform scale-x-0 origin-left transition-transform duration-200 ease-out group-hover:scale-x-100 rounded-lg" />
                        <span className="relative z-10 flex items-center gap-2">
                            <RiAccountCircle2Fill className="w-6 h-6" aria-hidden="true" />
                            <span className="font-semibold">Register</span>
                        </span>
                    </Link>
                </div>

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