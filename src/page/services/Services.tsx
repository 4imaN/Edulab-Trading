    import { Workflow } from "lucide-react";
    import { FaArrowsDownToPeople } from "react-icons/fa6";
    import { FaFileImport } from "react-icons/fa";
    import { motion } from "framer-motion";
    import { useState } from "react";
    const Services = () => {
        const strategy = [
            {
                icon: <FaFileImport size={60} />,
                title: "import",
                // descriptions: [
                //     "Advisoring",
                //     "Marketing Camping",
                //     "Overall & Mint Strategy",
                // ],
                info: [
                    "Importing all kinds of labratory equipments",
                    "Imports based on Orders",
                    "Custom Orders"
                ],
            },
            {
                icon: <Workflow size={60} color='#01B2FB' />,
                title: "Marketing Campaign",
                // descriptions: [
                //     "Partnership Strategy",
                //     "Partnership Managment",
                //     "Collaboration Managment",
                // ],
                info: [
                    "Setting up the marketing strategy",
                    "A personalized strategy with paid & organic marketing (KOL's/Alpha calls/media...)",
                    "Constant coordination with collab & community/social media strategy",
                    "Marketing campaign execution",
                ],
            },
            {
                icon: <FaArrowsDownToPeople color='#01B2FB' />,
                title: "Partnership Managment",
                // descriptions: [
                //     "Discord Creation",
                //     "Twitter Managment",
                //     "Discord Managment",
                // ],
                info: [
                    "Setting up the partnership strategy",
                    "Establishment of long-term partnerships with big communities and exclusive group",
                    "Access to our large networks, private groups, Investors, Whales...",
                    "AMA's with the largest communities",
                ],
            },
        ];
        const cardDirection = ["-100%", "100%", "-100%"];
        const cardVariants = {
            initial: (index: number) => ({
                x: cardDirection[index],
                opacity: 0,
            }),
            animate: (index: number) => ({
                x: "0%",
                opacity: 1,
                transition: {
                    delay: 0.3 * index,
                },
            }),
        };
        const [displayService, setDisplayService] = useState(0);
        return (
            <section
                className='overflow-hidden mx-auto md:py-20 pt-[74px] sm:pt-[72px] bg-cover pb-10 flex flex-col items-center gap-5 md:gap-10 w-full overflow-y-clip text-white'
                id='services'
            >
                <div className='w-full h-full max-w-[1400px] flex flex-col justify-center items-center gap-5 md:gap-10 '>
                    <p className='text-4xl lg:text-6xl text-center font-bold px-7 text-white sm:mt-5'>
                        Our Services
                    </p>
                    <div className='flex flex-col lg:grid lg:grid-cols-3 items-center gap-5 w-full h-full px-10'>
                        {/* md:gap-14  justify-evenly  md:px-20*/}
                        {strategy.map((item, index) => (
                            <motion.div
                                variants={cardVariants}
                                initial='initial'
                                whileInView='animate'
                                custom={index}
                                className='w-full flex flex-col rounded-lg  py-10 roundedd-md items-center gap-3 hover:cursor-pointer'
                                onMouseOver={() => setDisplayService(index)}
                            >
                                {/* px-5  border-2 border-white */}
                                <div
                                    className={`text-5xl text-[#01B2FB] ease-in-out duration-500 ${
                                        displayService === index ? "scale-110" : ""
                                    }`}
                                >
                                    {item.icon}
                                </div>
                                {/* <p className='text-center w-full text-[#01B2FB] font-bold text-2xl'>
                                    {item.title}
                                </p> */}
                                <p
                                    className={`text-center min-w-fit w-full text-[#01B2FB] font-bold text-md ease-in-out duration-500 ${
                                        displayService === index ? "scale-110" : ""
                                    }`}
                                >
                                    {item.title}
                                </p>
                                {/* <div className='text-lg space-y-3 text-center w-full'>
                                    {item.descriptions.map((detail) => (
                                        <p className='w-full'>{detail}</p>
                                    ))}
                                </div> */}
                            </motion.div>
                        ))}
                    </div>
                    {
                        <div
                            className={`grid grid-cols-3 items-center w-full h-full ${
                                displayService != null && displayService % 2 === 0
                                    ? "flex-row"
                                    : "flex-row"
                            }`}
                        >
                            <div className='w-full h-full flex flex-col gap-10 justify-center items-center border-r-2 border-white'>
                                <div
                                    className={`text-5xl w-fit text-[#01B2FB] ease-in-out duration-500 scale-150
                                `}
                                >
                                    {strategy[displayService] &&
                                        strategy[displayService].icon}
                                </div>

                                <div className='w-fit text-3xl font-semibold'>
                                    {strategy[displayService] &&
                                        strategy[displayService].title}
                                </div>
                            </div>
                            <div className='col-span-2 flex flex-col items-center justify-center w-full h-full'>
                                <div className='text-xl space-y-3 w-full flex flex-col justify-evenly px-10 min-h-[300px]'>
                                    {strategy[displayService] &&
                                        strategy[displayService].info.map(
                                            (detail) => (
                                                <p className='w-full text-xl font-semibold text-left '>
                                                    {detail}
                                                </p>
                                            )
                                        )}
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </section>
        );
    };

    export default Services;
