import bg from "./assets/appBg.png";
import View from "./page/View.tsx";
const App = () => {
    return (
        <div
            className='bg-cover bg-center w-full h-svh overflow-y-scroll'
            style={{
                backgroundImage: `url(${bg})`,
                backgroundRepeat: "no-repeat",
            }}
        >
            <View />
        </div>
    );
};

export default App;
