import { teamConfig } from "../team/teamConfig";
type partnersType = {
    partners: boolean;
};
const Partners = ({ partners }: partnersType) => {
    return (
        <div
            className={`w-full ${
                partners ? "max-w-[900px]" : "max-w-[500px]"
            } inline-flex flex-nowrap [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]`}
        >
            <ul className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll'>
                {teamConfig.map((member, index) => (
                    <li className='flex w-[70px] h-[50px]'>
                        <img
                            src={member.profile}
                            key={index}
                            loading='lazy'
                            className='object-cover w-full'
                        />
                    </li>
                ))}
            </ul>
            <ul
                className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll'
                aria-hidden='true'
            >
                {teamConfig.map((member, index) => (
                    <li className='flex w-[70px] h-[50px]' key={index + 122}>
                        <img
                            src={member.profile}
                            loading='lazy'
                            className='object-cover w-full'
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Partners;
