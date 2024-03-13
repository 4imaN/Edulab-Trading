import { motion } from "framer-motion";
import logo from "../../assets/logo.png";
import Partners from "../partners/Partners";
import manaFlask from "../../assets/manaFlask.png";
const Home = () => {
    const divLeftVariantsText1 = {
        initial: {
            opacity: 0,
            y: "100%",
        },
        animate: {
            opacity: 1,
            y: "0%",
            transition: {
                duration: 0.4,
            },
        },
    };
    const divLeftVariantsText2 = {
        initial: {
            opacity: 0,
            y: "100%",
        },
        animate: {
            opacity: 1,
            y: "0%",
            transition: {
                duration: 0.4,
            },
        },
    };
    const flaskVariant = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                delay: 0.3,
            },
        },
    };
    return (
        <div className='py-5 md:py-24 flex flex-col items-center text-white px-5 md:px-14 lg:px-20'>
            <div className='w-full h-full max-w-[1400px] flex flex-col justify-center'>
                <div className='flex flex-col-reverse md:grid md:grid-cols-2 items-center md:items-start text-center md:text-left gap-5 overflow-hidden'>
                    <div className='flex flex-col justify-evenly items-center md:items-start gap-y-10'>
                        <div className='flex w-[200px]'>
                            <img src={logo} />  
                        </div>
                        
                        <motion.p
                            variants={divLeftVariantsText2}
                            initial='initial'
                            whileInView='animate'
                            className='text-xl md:text-3xl md:max-w-[80%]'
                        >
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Vel, doloribus. Dolorem fugit ad harum
                            maiores!{" "}
                        </motion.p>
                        <div className='w-[90vw] overflow-clip md:w-fit'>
                            <Partners partners={false} />
                        </div>
                    </div>
                        
                </div>
            </div>
        </div>
    );
};

export default Home;
