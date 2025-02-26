// components/CTAButton.js
import Link from 'next/link';

const CTAButton = ({ href, target, variant = 'primary', children, className = '' }) => {
  const baseStyles = "px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg";
  let variantStyles = "";

  if (variant === 'primary') {
    variantStyles = "bg-yellow-400 text-gray-900 hover:bg-yellow-500";
  } else if (variant === 'secondary') {
    variantStyles = "bg-white/20 backdrop-blur-lg hover:bg-white/30";
  }

  return (
    <Link href={href} target={target} className={`${baseStyles} ${variantStyles} ${className}`}>
      {children}
    </Link>
  );
};

export default CTAButton;
