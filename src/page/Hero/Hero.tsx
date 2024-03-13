import { motion } from "framer-motion";
import potion from "../../assets/manaFlask2.png";
import bg from "../../assets/appBg.png";
const Hero = () => {
    const initial = {
        opacity: 0.15,
        scale: 1.2,
    };
    const animate = {
        opacity: 1,
        scale: 0.6,
        transition: {
            duration: 3,
        },
    };
    return (
        <div
            className='flex w-full bg-black min-h-svh items-center bg-cover justify-center'
            style={{
                backgroundImage: `url(${bg})`,
                backgroundRepeat: "no-repeat",
            }}
        >
            <motion.div
                initial={initial}
                whileInView={animate}
                className='flex max-h-[50%] max-w-[50%]'
            >
                <img src={potion} />
            </motion.div>
        </div>
    );
};

export default Hero;
