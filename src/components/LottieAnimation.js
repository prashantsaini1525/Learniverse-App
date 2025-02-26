// components/LottieAnimation.js
import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const LottieAnimation = ({ animationData, width, height, loop = true, className = '' }) => {
    return (
        <div className={className} style={{ width: width, height: height }}>
            <Lottie animationData={animationData} loop={loop} />
        </div>
    );
};

export default LottieAnimation;
