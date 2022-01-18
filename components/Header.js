import React from 'react'
// import { motion } from 'framer-motion'

/*
const HEADER_ANIM_DURATION = 0.25

const header = {
    hidden : {opacity : 0},
    visible : {opacity : 1}
}
*/
function Header() {
    return (
        <nav 
            // initial="hidden"
            // animate="visible"
            // transition={{ duration: HEADER_ANIM_DURATION}}
            // variants={header}
            className="">
            <div className="">
                <div className="relative flex items-center justify-between h-16 px-5">
                    <a className="text-xl font-medium p-2 hover:bg-gray-200" href="">Cole Horvat</a>
                    <a className="text-xl p-2 hover:bg-gray-200" href="/Cole_Horvat_Resume.pdf" target="_blank">Resume</a>
                    {/* ADD DARK MODE BUTTON LATER */}
                </div>
            </div>
        </nav>
        
    )
}

export default Header