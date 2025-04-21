import Image1 from '@/assets/image_1.png';
import { Button } from '@/components/ui/button'; 
import { useNavigate } from 'react-router-dom';

export const HeroSection = () => {
    const navigate = useNavigate();
    const handleRedirect = () => {
        navigate('/auth');
    };

    return (
        <section className="relative bg-[#000000] text-white py-20 px-4 overflow-hidden">
            <div className="absolute -left-40 top-20 w-[400px] h-[400px] bg-white rounded-full blur-[200px] opacity-50 z-0" />
            <div className="relative z-10 text-center pt-10">
                <h1 className="text-4xl md:text-6xl font-bold text-green-300 mb-4">
                    Free AI Image Generator: <br /> Text to Image Online
                </h1>

                <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-300">
                    Convert words to images online in seconds with PixLune free AI image generator.
                    Watch your imagination transform into incredible AI art from text and image prompts.
                </p>

                <Button
                    className="bg-green-500 hover:bg-green-600 text-black px-6 py-3 text-lg font-semibold rounded-full"
                    onClick={handleRedirect}
                >
                    Generate AI Image Now
                </Button>
            </div>
            <div className="relative z-10 mt-20 flex flex-col lg:flex-row items-center justify-center gap-12 px-4 max-w-6xl mx-auto">
                <div className="absolute inset-0 flex items-center justify-center -z-10">
                    <div className="h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-green-400 via-blue-500 to-purple-600 opacity-30 blur-3xl" />
                </div>

                <img
                    src={Image1}
                    alt="AI Generated Example"
                    className="rounded-xl max-w-[400px] shadow-2xl"
                />
                <div className="text-left max-w-xl">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                        Introducing AI Text to Image Generator Online
                    </h2>
                    <p className="text-base md:text-lg text-gray-300">
                        It’s simple to get the perfect images or create stunning visuals with our free AI image generator.
                        Dream it, and use text to image online to visualize it. Easily create different AI images for products,
                        characters, and portraits at your fingertips, even if it doesn’t exist yet.
                    </p>
                </div>
            </div>
            <div className="absolute -right-30 top-40 w-[400px] h-[400px] bg-white rounded-full blur-[200px] opacity-25 z-0" />
        </section>
    );
};
