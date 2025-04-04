import "./TestimonialSlider.css";
import Image from "next/image";

interface CardProps {
  stars: number;
  content: string;
  avator: string;
  name: string;
  designation: string;
}

const TestimonialsCard: React.FC<CardProps> = ({
  stars,
  content,
  avator,
  name,
  designation,
}) => {
  return (
    <div className="w-full h-auto bg-white border border-gray-200 rounded-2xl shadow-md p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg">
      {/* Stars */}
      <div className="flex items-center gap-1 text-yellow-500 mb-4">
        {Array.from({ length: stars }, (_, index) => (
          <svg
            key={index}
            className="w-5 h-5"
            viewBox="0 0 18 17"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z" />
          </svg>
        ))}
      </div>

      {/* Testimonial Content */}
      <p className="text-[15px] text-gray-700 leading-relaxed mb-6 line-clamp-4">
        {content}
      </p>

      {/* User Info */}
      <div className="flex items-center gap-4">
        {/* <Image
          width={48}
          height={48}
          className="rounded-full object-cover"
          src={avator}
          alt="avatar"
        /> */}
        <div className="flex flex-col">
          <span className="text-base font-semibold text-gray-900">{name}</span>
          <span className="text-sm text-gray-500">{designation}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
