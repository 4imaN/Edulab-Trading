import { teamConfig } from "./teamConfig";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

import { motion } from "framer-motion";
const animationDelay = [0, 0.2, 0.4, 0.1, 0.3];

const fadeInAnimationVariants = {
    initial: (index: number) => ({
        opacity: 0,
        x: index % 2 === 0 ? "100%" : "-100%",
        y: "100%",
    }),
    animate: (index: number) => ({
        opacity: 1,
        x: "0%",
        y: "0%",
        transition: {
            delay: animationDelay[index],
        },
    }),
};
const windowScreenSize = window.innerWidth;
const fadeInAnimationLeft = {
    initial: {
        x: windowScreenSize < 600 ? -100 : 300,
        opacity: 0,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.3,
        },
    },
};

const fadeInTeamDescriptionVariant = {
    initial: {
        x: "100%",
    },
    animate: {
        x: "0",
        transition: {
            duration: 0.3,
        },
    },
};
const Team = () => {
    return (
        <section
            className='overflow-hidden min-h-fit md:py-20 pt-[74px] sm:pt-[72px] bg-cover pb-10 flex flex-col items-center w-full overflow-y-clip'
            id='team'
        >
            <div className='w-full h-full max-w-[1400px] flex flex-col justify-center items-center gap-5 md:gap-10 '>
                <motion.p
                    variants={fadeInAnimationLeft}
                    initial='initial'
                    whileInView='animate'
                    className='text-4xl lg:text-6xl text-center font-bold px-7 text-white sm:mt-5'
                >
                    The Team
                </motion.p>
                <motion.p
                    variants={fadeInTeamDescriptionVariant}
                    initial='initial'
                    whileInView='animate'
                    className='px-7 mx-auto w-full md:w-[80%] max-w-[1000px] text-center text-xl text-zinc-300'
                >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Ducimus necessitatibus laudantium culpa saepe voluptate
                    minus aperiam sed consectetur, magni temporibus vel aliquam
                    velit at incidunt. Nam explicabo recusandae reiciendis ut
                    natus? Ex vero sapiente sunt ea repellendus sequi at
                    excepturi.
                </motion.p>
                <div className='flex flex-col md:flex-row flex-wrap justify-center items-center gap-5 sm:gap-8 md:gap-y-5 px-7 w-fit'>
                    {teamConfig.map((team, index) => (
                        <motion.div
                            key={team.name}
                            className='flex flex-col items-center gap-2 md:gap-5 text-center pt-1 md:w-[25%]'
                            variants={fadeInAnimationVariants}
                            initial='initial'
                            whileInView='animate'
                            custom={index}
                        >
                            <div className='flex rounded-full ring-4 ring-white overflow-x-hidden w-[150px] h-[150px] sm:w-[160px] sm:h-[160px] md:w-[180px] md:h-[180px]'>
                                <img
                                    src={team.profile}
                                    alt='cover rounded-full'
                                    loading='lazy'
                                />
                            </div>

                            <div className='text-white space-y-2'>
                                <div className='flex justify-center items-center gap-2'>
                                    <p className='font-bold text-2xl'>
                                        {team.name}
                                    </p>
                                    -
                                    <p className='font-semibold text-xl'>
                                        {team.position}
                                    </p>
                                </div>
                                <p>Lorem, ipsum dolor.</p>
                                <div className='flex gap-2 justify-center text-2xl'>
                                    <a
                                        href='https://x.com'
                                        target='_blank'
                                        className='hover:text-[#01B2FB] hover:scale-125'
                                    >
                                        <FaXTwitter />
                                    </a>{" "}
                                    <a
                                        href='https://linkedin.com'
                                        target='_blank'
                                        className='hover:text-[#01B2FB] hover:scale-125'
                                    >
                                        <FaLinkedinIn />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
