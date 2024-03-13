import Partners from "../partners/Partners";
import { clientsConfig } from "./clientsConfig";
import { motion } from "framer-motion";
const Clients = () => {
    const TitleVariant = {
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };
    const animationDirection = [100, -100, 100, -100, -100, 100, -100, 100];
    const ourClientsVariant = {
        initial: (index: number) => ({
            opacity: 0,
            y: animationDirection[index],
        }),
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };
    const windowSize = window.innerWidth;
    return (
        <section
            className='overflow-hidden min-h-fit mx-auto md:py-20 pt-[74px] sm:pt-[72px] bg-cover pb-10 flex flex-col items-center gap-5 lg    :gap-10 w-full overflow-y-clip text-white px-5'
            id='clients'
        >
            <div className='w-full max-w-[1400px] text-center md:text-left flex flex-col gap-16'>
                <motion.p
                    variants={TitleVariant}
                    initial='initial'
                    whileInView='animate'
                    className='text-5xl text-center font-bold'
                >
                    OUR CLIENTS
                </motion.p>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-16 content-evenly mx-auto  md:px-10 '>
                    {/* flex flex-wrap gap-y-10 gap-[5%] */}
                    {clientsConfig.map((client, index) => (
                        <motion.div
                            variants={ourClientsVariant}
                            initial='initial'
                            whileInView='animate'
                            custom={index}
                            key={client.clientPic}
                            viewport={{ once: windowSize < 600 ? true : false }}
                            className='w-fit '
                        >
                            {/* w-[30%] */}
                            <a 
                                href={"https://" + client.clientLink}
                                target='_blank'
                            >
                                <div className='flex w-full max-w-[140px] max-h-[140px] md:h-[250px] md:max-h-none md:max-w-[250px] lg:max-w-[270px] lg:max-h-[270px] justify-center items-center rounded-md overflow-clip shadow-md drop-shadow-4xl '>
                                    <img
                                        src={client.clientPic}
                                        className='object-cover object-center'
                                        alt=''
                                    />
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>
                <div className='flex flex-col items-center gap-6 justify-center'>
                    <p className='text-3xl font-semibold'>Trusted Partners</p>
                    <Partners partners={true} />
                </div>
            </div>
        </section>
    );
};

export default Clients;
