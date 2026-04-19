"use client"
import { useState } from "react"

import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"

import Image from "next/image"
import { Linkedin, Twitter, Mail, ArrowUpRight, Plus, Atom, Users, Lightbulb, Heart, X } from "lucide-react"



const teamMembers = [
    {
        name: "Mayank Verma",
        role: "Chief Technology Officer",
        bgText: "Tech",
        smallText: "SPECIALIZED COMPUTING",
        image: "/images/team/mayank-verma.png",
        align: "split",
        linkedin: "https://www.linkedin.com/in/mayank-verma-3a459b306/",
        mail: "mailto:tech@fostride.com"
    },
    {
        name: "Aryan Jain",
        role: "Chief Financial Officer",
        bgText: "Finance",
        smallText: "FINANCIAL FORECASTING",
        image: "/images/team/aryan-jain.png",
        align: "split",
        linkedin: "https://www.linkedin.com/in/aryan-jain-4357241b9/",
        mail: "mailto:fostride@gmail.com"
    },
    {
        name: "Aryan Nair",
        role: "Chief Strategy Officer",
        bgText: "Practical",
        smallText: "INGENIUS STRATEGY",
        image: "/images/team/aryan-nair.png",
        align: "split",
        linkedin: "https://www.linkedin.com/in/aryan-nair-b70248317/",
        mail: "mailto:fostride@gmail.com"
    },
    {
        name: "Piyush Tanwar",
        role: "Chief Marketing Officer",
        bgText: "Strategic",
        smallText: "MARKETING GENIUS",
        image: "/images/team/piyush-tanwar.png",
        align: "split", // Custom alignment: Big text Left, Small text Right
        linkedin: "https://www.linkedin.com/",
        mail: "mailto:fostride@gmail.com"
    }
]

export default function OurTeamBody() {
    const [activeMemberIndex, setActiveMemberIndex] = useState<number | null>(null);
    const [activeAboutIndex, setActiveAboutIndex] = useState<number | null>(null);
    const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);

    return (
        <>
            {/* About Company Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[60px] py-16 lg:py-32 items-start">
                <div className="space-y-[60px] lg:sticky lg:top-32">
                    <h2 className="text-3xl md:text-[40px] font-bold text-white">
                        About our Company
                    </h2>
                    <p className="text-white text-lg md:text-[24px] font-light leading-[1.5]">
                        Let's get acquainted! At Fostride, we're passionate about sustainability and innovation. Our mission is to redefine waste, transforming it into opportunities for a greener tomorrow. From AI-powered solutions to grassroots initiatives, we're creating a cleaner planet—because sustainability isn't just a goal, it's an exciting journey. Join us as we revolutionize waste management and build a better future, one solution at a time.
                    </p>
                </div>

                <div className="space-y-4 flex flex-col items-end">
                    {/* About Content Data */}
                    {[
                                {
                                    title: "01. Our History",
                                    content: (
                                        <div className="space-y-6 text-[15px] font-light leading-relaxed text-gray-300">
                                            <p>
                                                Fostride began in 2022 as a simple yet ambitious idea for a school competition, driven by the vision of tackling one of the world's most pressing problems: waste management. What started as a small concept has now evolved into a determined effort to develop groundbreaking technology that focuses on waste sorting and conversion for a sustainable future.
                                            </p>
                                            <p>
                                                Over the years, our journey has been marked by several achievements, including winning competitions and organizing impactful small-scale waste management drives. These milestones fueled our passion and commitment, prompting us to dedicate ourselves to extensive research and development.
                                            </p>
                                            <p>
                                                In 2024, we made significant strides, directing our focus entirely on expanding our R&D capabilities to create more effective and eco-friendly solutions. Today, Fostride stands at the prototyping stage, working tirelessly to bring our vision to life and to deliver innovative technology that not only addresses waste but also protects and preserves our environment for generations to come.
                                            </p>
                                        </div>
                                    )
                                },
                                {
                                    title: "02. Our Mission",
                                    content: (
                                        <div className="space-y-6 text-[15px] font-light leading-relaxed text-gray-300">
                                            <p>
                                                To revolutionize waste management through innovative technology, fostering a circular economy that minimizes environmental impact and creates sustainable value. By connecting waste generators, recyclers, and upcyclers, we aim to empower communities, reduce pollution, and promote a cleaner, greener future for generations to come.
                                            </p>
                                        </div>
                                    )
                                },
                                {
                                    title: "03. Our Vision",
                                    content: (
                                        <div className="space-y-6 text-[15px] font-light leading-relaxed text-gray-300">
                                            <p>
                                                To lead the global transition toward a zero waste future by transforming waste into opportunities, fostering sustainable practices, and creating a world where every resource is valued, reused, and repurposed for the benefit of people and the planet.
                                            </p>
                                        </div>
                                    )
                                }
                            ].map((item, index) => {
                                const isExpanded = activeAboutIndex === index;

                                return (
                                    <div
                                        key={index}
                                        onClick={() => setActiveAboutIndex(isExpanded ? null : index)}
                                        className={`group flex flex-col w-full lg:w-[600px] bg-[#111111] border border-white/10 overflow-hidden transition-all duration-500 ease-in-out cursor-pointer
                                            ${isExpanded ? 'rounded-[30px] border-transparent' : 'rounded-[37px] hover:border-transparent'}
                                        `}
                                    >
                                        {/* Header Row */}
                                        <div className="flex items-center justify-between px-6 flex-shrink-0 h-[74px] w-full">
                                            <span
                                                className={`text-[16px] transition-all duration-300 ease-in-out
                                                    ${isExpanded
                                                        ? 'text-[#0C8346] font-normal translate-x-0'
                                                        : 'text-white font-normal group-hover:font-light group-hover:text-[#0C8346] group-hover:translate-x-3'
                                                    }
                                                `}
                                            >
                                                {item.title}
                                            </span>

                                            <div
                                                className={`h-10 w-10 rounded-xl flex items-center justify-center transition-colors duration-300
                                                    ${isExpanded
                                                        ? 'bg-[#0C8346]'
                                                        : 'bg-white/10 group-hover:bg-[#0C8346]'
                                                    }
                                                `}
                                            >
                                                {isExpanded ? (
                                                    <X className="text-black w-5 h-5" />
                                                ) : (
                                                    <Plus className="text-white group-hover:text-black w-6 h-6 transition-colors duration-300" />
                                                )}
                                            </div>
                                        </div>

                                        {/* Expanded Content */}
                                        <div
                                            className={`px-8 transition-all duration-500 ease-in-out overflow-hidden
                                                ${isExpanded ? 'max-h-[600px] opacity-100 pb-8' : 'max-h-0 opacity-0'}
                                            `}
                                        >
                                            {item.content}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Founder Section */}
                    <div className="py-20 mb-20">
                        <h2 className="text-3xl md:text-[40px] font-bold text-white mb-8 md:mb-12">
                            Meet The Founder
                        </h2>

                        <p className="text-xl md:text-[24px] text-gray-400 font-light leading-relaxed mb-12 md:mb-20">
                            <span className="text-white font-normal">Gavi Kothari</span>, the <span className="text-white font-normal">founder of Fostride</span>, is passionate about <span className="text-white font-normal">leveraging technology</span> for <span className="text-white font-normal">sustainability</span>. His <span className="text-white font-normal">innovative vision</span> and <span className="text-white font-normal">dedication</span> drive Fostride's mission to <span className="text-white font-normal">revolutionize waste management</span> and create a <span className="text-white font-normal">greener future</span>.
                        </p>

                        <div className="grid grid-cols-1 lg:grid-cols-[450px_1fr] gap-10 lg:gap-[60px] items-start">
                            {/* Founder Image */}
                            <div className="relative h-[604px] w-full max-w-md mx-auto lg:mx-0">
                                {/* Green Shape Background */}
                                <div className="absolute inset-x-8 bottom-0 top-20 bg-[#0C8346] rounded-t-full rounded-b-[40px]" />
                                {/* Image - Using placeholder as actual asset is not available, tinted to match */}
                                <Image
                                    src="/images/founder.png"
                                    alt="Gavi Kothari"
                                    fill
                                    className="object-cover object-top relative z-10 mix-blend-normal rounded-b-[40px]" // Rounded bottom to match shape
                                />
                                {/* Name Overlay */}
                                <div className="absolute bottom-4 left-4 z-20 leading-none">
                                    <span className="block text-[#0C8346] text-4xl font-bold">Gavi</span>
                                    <span className="block text-white text-5xl font-black uppercase tracking-tighter">KOTHARI</span>
                                </div>
                            </div>

                            {/* Founder Bio & Details */}
                            <div className="space-y-8 pt-8">
                                <p className="text-gray-300 leading-relaxed text-[16px] font-light">
                                    Gavi Kothari is an accomplished professional who brings passion, innovation, and leadership to his endeavors. With a strong presence in the industry, Gavi has been instrumental in driving impactful initiatives. His expertise spans across various fields, combining technological innovation with sustainable practices to create value. Known for his strategic vision and dedication to excellence, Gavi has significantly influenced the trajectory of his projects, positioning himself as a respected figure and a mentor. His commitment to empowering teams and delivering exceptional results makes him a driving force in his domain.
                                </p>

                                {/* Tags */}
                                <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                                    {[
                                        { icon: <Atom size={16} className="text-[#0C8346]" />, text: "Visionary Thinker" },
                                        { icon: <Users size={16} className="text-[#0C8346]" />, text: "Empathetic Leader" },
                                        { icon: <Lightbulb size={16} className="text-[#0C8346]" />, text: "Creative Problem-Solver" },
                                        { icon: <Heart size={16} className="text-[#0C8346]" />, text: "Passionate Mentor" }
                                    ].map((tag, i) => (
                                        <div key={i} className="flex items-center gap-2 px-3 py-2 bg-[#1a1a1a] rounded-full border border-white/5 whitespace-nowrap">
                                            {tag.icon}
                                            <span className="text-gray-300 text-xs font-medium">{tag.text}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Socials */}
                                <div className="space-y-3">
                                    <h4 className="text-gray-400 font-medium">Socials:</h4>
                                    <div className="flex gap-4">
                                        {[
                                            { label: "LINKEDIN", href: "https://in.linkedin.com/in/gavikothari" },
                                            { label: "INSTAGRAM", href: "https://www.instagram.com/gavi.kothari/" },
                                            { label: "MAIL", href: "mailto:gavi@fostride.com" }
                                        ].map((item, i) => (
                                            <a
                                                key={i}
                                                href={item.href}
                                                target={item.label === 'MAIL' ? undefined : "_blank"}
                                                rel={item.label === 'MAIL' ? undefined : "noopener noreferrer"}
                                                className="group px-6 py-2 bg-[#0C8346] text-black font-light text-xs rounded-full flex items-center transition-colors"
                                            >
                                                {item.label}
                                                <ArrowUpRight size={14} className="ml-1 transition-transform duration-300 group-hover:rotate-45" />
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                {/* Featured In */}
                                <div className="space-y-3 pt-4">
                                    <h4 className="text-gray-400 font-medium">Featured In:</h4>
                                    <div className="flex flex-wrap gap-4">
                                        {[
                                            { label: "THE HINDU IN SCHOOL", href: "https://drive.google.com/file/d/1QTAlZHICLFw7WFB1zexor9qMtQkkkqPl/view?usp=sharing" },
                                            { label: "GUIDING YOUNG MINDS", href: "https://drive.google.com/file/d/1uQ9PFhs4yBvDeIlnDfK0SiUdbHSuVyU9/view?usp=sharing" },
                                            { label: "SOMAIYA UNIVERSITY", href: "https://www.somaiya.edu/en/view-announcement/1018/" }
                                        ].map((feature, i) => (
                                            <a
                                                key={i}
                                                href={feature.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-6 py-2.5 border border-white/20 rounded-full text-xs font-light text-white tracking-wide uppercase hover:bg-[#0C8346] hover:text-white hover:border-transparent transition-colors cursor-pointer"
                                            >
                                                {feature.label}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                    {/* Team Squad Section */}
                    <div className="py-20 mb-20">
                        {/* Header */}
                        <div className="text-center mb-20 space-y-6">
                            <div className="inline-block px-4 py-1.5 bg-[#111111] rounded-full border border-white/10">
                                <span className="text-[#0C8346] text-[10px] font-bold tracking-widest uppercase">Team Members</span>
                            </div>
                            <h2 className="text-5xl md:text-7xl font-medium text-white tracking-tight leading-tight">
                                Say Hello to Our<br />Squad
                            </h2>
                            <p className="text-gray-400 max-w-2xl mx-auto text-sm font-light leading-relaxed">
                                Get ready to meet the faces behind the magic, the dreamers, the doers, and the unstoppable force driving our success.
                            </p>
                        </div>

                        {/* Team Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {teamMembers.map((member, idx) => (
                                <div
                                    key={idx}
                                    className="relative group h-[574px] w-full bg-white/5 backdrop-blur-[8px] rounded-[30px] overflow-hidden border border-white/5"
                                >
                                    {/* Text Background Layer */}
                                    <div className={`absolute top-10 w-full z-10 leading-none select-none px-6 transition-transform duration-700 ease-out group-hover:-translate-y-6 ${member.align === 'split' ? '' :
                                        member.align === 'right' ? 'text-right' :
                                            member.align === 'left' ? 'text-left' : 'text-center'
                                        }`}>
                                        <h3 className={`font-bold text-[#0C8346] tracking-tighter mix-blend-screen ${member.align === 'split' ? 'text-left text-[50px] -ml-6' : 'scale-110 text-[60px]'}`}>
                                            {member.bgText}
                                        </h3>
                                        <div
                                            className={`text-white uppercase relative z-20 ${member.align === 'split' ? 'text-right mt-0 pr-0 -mr-6 font-light tracking-[-0.02em]' : '-mt-8 text-[13px] font-bold tracking-[0.2em]'}`}
                                            style={member.align === 'split' ? { fontSize: '20px' } : undefined}
                                        >
                                            {member.smallText}
                                        </div>
                                    </div>

                                    {/* Green Background Shape (Active State) */}
                                    <div
                                        className={`absolute bottom-0 left-0 right-0 h-[80%] bg-[#0C8346] rounded-t-[100%] z-15 transition-transform duration-700 ease-out ${activeMemberIndex === idx ? 'translate-y-0 scale-100' : 'translate-y-full scale-0'}`}
                                        style={{ transformOrigin: 'bottom' }}
                                    />

                                    {/* Image Layer */}
                                    <div className="absolute inset-0 z-20">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className={`object-cover object-bottom transition-all duration-700 ease-out 
                                                ${activeMemberIndex === idx ? 'grayscale-0 translate-y-6' : 'grayscale contrast-125 group-hover:translate-y-14'}
                                            `}
                                        />
                                    </div>

                                    {/* Plus Button / Social Actions */}
                                    <div className="absolute bottom-[76px] left-1/2 -translate-x-1/2 z-40 w-full flex justify-center">
                                        {activeMemberIndex === idx ? (
                                            <div className="flex items-center gap-3 animate-in fade-in zoom-in duration-300">
                                                <button
                                                    onClick={() => setActiveMemberIndex(null)}
                                                    className="h-10 w-10 bg-[#e0e0e0] rounded-[14px] flex items-center justify-center hover:scale-110 transition-transform shadow-lg cursor-pointer text-black"
                                                >
                                                    <X size={20} />
                                                </button>
                                                <a
                                                    href={member.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="h-10 w-10 bg-[#e0e0e0] rounded-[14px] flex items-center justify-center hover:scale-110 transition-transform shadow-lg cursor-pointer text-black"
                                                >
                                                    <Linkedin size={20} />
                                                </a>
                                                <a
                                                    href={member.mail}
                                                    className="h-10 w-10 bg-[#e0e0e0] rounded-[14px] flex items-center justify-center hover:scale-110 transition-transform shadow-lg cursor-pointer text-black"
                                                >
                                                    <Mail size={20} />
                                                </a>
                                            </div>
                                        ) : (
                                            <button
                                                onClick={() => setActiveMemberIndex(idx)}
                                                className="h-10 w-10 bg-[#e0e0e0] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg cursor-pointer"
                                            >
                                                <Plus className="text-black w-5 h-5" />
                                            </button>
                                        )}
                                    </div>

                                    {/* Name Card */}
                                    <div className="absolute bottom-0 left-0 right-0 h-[96px] bg-[#111111] rounded-b-[30px] rounded-t-[20px] z-30 flex flex-col items-center justify-center border-t border-white/5">
                                        <h4 className="text-white text-lg font-bold">{member.name}</h4>
                                        <p className="text-gray-400 text-xs font-light tracking-wide">{member.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Values Section */}
                    <div className="relative w-full py-40 mb-32 flex items-center justify-center overflow-hidden">
                        <h2 className="text-[16.5vw] font-bold text-white tracking-widest leading-none select-none text-center">
                            VALUES
                        </h2>

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[366px] h-[366px] bg-white/5 backdrop-blur-[8px] rounded-full shadow-[0_0_50px_rgba(0,0,0,0.8)] flex items-center justify-center z-10 border border-white/5">
                            <div className="relative w-full h-full flex flex-wrap items-center justify-center content-end gap-x-2 gap-y-3 pb-12 px-6 overflow-hidden">
                                {[
                                    { text: "Sustainability", r: "-rotate-6 translate-y-2" },
                                    { text: "Impact", r: "rotate-12 translate-y-1" },
                                    { text: "Positive Experience", r: "-rotate-3" },
                                    { text: "Trustworthiness", r: "rotate-6" },
                                    { text: "Circularity", r: "-rotate-12" },
                                    { text: "Innovation", r: "rotate-3" },
                                    { text: "Collaboration", r: "-rotate-3" },
                                    { text: "Integrity", r: "rotate-6" },
                                    { text: "Reliability", r: "-rotate-6" },
                                    { text: "Quality", r: "rotate-2" }
                                ].map((tag, i) => (
                                    <div key={i} className={`flex items-center gap-1.5 px-3 py-1.5 bg-[#0C8346] text-black rounded-full shadow-lg transform ${tag.r} hover:scale-110 hover:z-20 transition-all duration-300 cursor-default border border-black/5`}>
                                        <Atom size={12} className="text-black/70 mix-blend-multiply" />
                                        <span className="font-light text-[10px] uppercase tracking-wide whitespace-nowrap">{tag.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>





                    {/* FAQ Section */}
                    <div className="py-20 mb-20">
                        {/* Header */}
                        <div className="text-center mb-16 space-y-6">
                            <div className="inline-block px-4 py-1.5 bg-[#111111] rounded-full border border-white/10">
                                <span className="text-[#0C8346] text-[10px] font-bold tracking-widest uppercase">Frequently Asked Questions</span>
                            </div>
                            <h2 className="text-5xl md:text-6xl font-medium text-white tracking-tight leading-tight">
                                Got Questions?<br />We've Got Answers!
                            </h2>
                        </div>

                        {/* FAQ List */}
                        <div className="max-w-4xl mx-auto space-y-2">
                            {[
                                { q: "What is Fostride?", a: "Fostride is a sustainability-focused startup that leverages technology to revolutionize waste management. Our mission is to create a cleaner future by promoting recycling, upcycling, and waste-to-value initiatives." },
                                { q: "How does Fostride work?", a: "Fostride connects individuals and businesses that generate waste with those who can recycle, repurpose, or upcycle it. Using AI-powered solutions, we track, analyze, and optimize waste management processes to ensure sustainability." },
                                { q: "What phase is Fostride currently in?", a: "We are currently in the development and growth phase, focusing on refining our platform, onboarding partners, and expanding our reach in waste management ecosystems." },
                                { q: "Who can join Fostride?", a: "Anyone can join Fostride! Whether you're a waste generator, recycler, environmental enthusiast, or an organization looking to manage waste sustainably, we have a role for you." },
                                { q: "How can I get involved with Fostride?", a: "You can contribute by: - Registering as a waste generator or recycler on our platform.  - Partnering with us for sustainable waste management initiatives.  - Joining our team as a collaborator or volunteer." },
                                { q: "What kind of waste does Fostride manage?", a: "Fostride manages a wide range of waste, including plastic, metal, organic waste, and e-waste. We focus on ensuring that every type of waste is handled responsibly and sustainably." },
                                { q: "How does Fostride help the environment?", a: "By promoting recycling, upcycling, and reducing landfill usage, Fostride helps cut down pollution, conserve resources, and reduce the overall carbon footprint of waste management processes." },
                                { q: "Is Fostride only for businesses, or can individuals join too?", a: "Fostride is open to both individuals and businesses. Whether you're an individual looking to responsibly dispose of waste or a business aiming to implement sustainable practices, we've got you covered." },
                                { q: "How do I track the waste I contribute or recycle through Fostride?", a: "Our platform provides real-time analytics and dashboards to help you track the waste you generate, recycle, or repurpose. You'll see how your efforts are making a tangible impact on the environment." },
                                { q: "Does Fostride offer partnerships or collaborations?", a: "Yes, we actively seek partnerships with businesses, NGOs, government organizations, and individuals to expand our waste management efforts and create innovative solutions." },
                                { q: "Can I invest in Fostride?", a: "We welcome investors who believe in our vision of sustainable waste management. For more details, feel free to contact us through our website." },
                                { q: "How can I contact the Fostride team?", a: "You can reach out to us via email at fostride@gmail.com. We'd be happy to answer your questions." }
                            ].map((item, idx) => {
                                const isExpanded = activeFaqIndex === idx;

                                return (
                                    <div
                                        key={idx}
                                        onClick={() => setActiveFaqIndex(isExpanded ? null : idx)}
                                        className={`group flex flex-col w-full bg-[#111111] border border-white/10 overflow-hidden transition-all duration-500 ease-in-out cursor-pointer
                                            ${isExpanded ? 'rounded-[30px] border-transparent' : 'rounded-[27px] hover:border-transparent'}
                                        `}
                                    >
                                        <div className="flex items-center justify-between px-6 flex-shrink-0 h-[54px] w-full">
                                            <span className={`text-sm transition-all duration-300 ease-in-out
                                                ${isExpanded
                                                    ? 'text-[#0C8346] font-normal translate-x-0'
                                                    : 'text-white font-normal group-hover:font-light group-hover:text-[#0C8346] group-hover:translate-x-3'}
                                            `}>
                                                {item.q}
                                            </span>
                                            <div className={`h-8 w-8 rounded-lg flex items-center justify-center transition-colors duration-300
                                                ${isExpanded
                                                    ? 'bg-[#0C8346]'
                                                    : 'bg-white/10 group-hover:bg-[#0C8346]'}
                                            `}>
                                                {isExpanded ? (
                                                    <X className="text-black w-4 h-4" />
                                                ) : (
                                                    <Plus className="text-white group-hover:text-black w-4 h-4 transition-colors duration-300" />
                                                )}
                                            </div>
                                        </div>

                                        <div className={`px-6 transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[200px] opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                                            <p className="text-gray-400 font-light text-sm leading-relaxed">{item.a}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
        </>
    )
}

function LinkButton({ icon }: { icon: React.ReactNode }) {
    return (
        <a href="#" className="p-3 bg-white/10 text-white rounded-full hover:bg-[#0C8346] hover:text-white transition-all hover:scale-110">
            {icon}
        </a>
    )
}
