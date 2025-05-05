export default function Card({ label, labelColor, title, description, hiddenOnMobile = false }) {
    const labelClass = {
      purple: 'text-purple-800 bg-purple-100',
      blue: 'text-blue-800 bg-blue-100',
      green: 'text-green-800 bg-green-100',
    }[labelColor] || '';
  
    return (
      <div
        className={`bg-white shadow-lg rounded-lg p-4 w-[225px] h-[232px] ${
          hiddenOnMobile ? 'hidden md:block' : ''
        }`}
      >
        <p className={`text-[14px] font-normal mt-2 px-1 w-fit rounded-sm mb-2 ${labelClass}`}>
          {label}
        </p>
        <h3 className="md:text-[20px] text-[16px]  font-medium leading-tight text-[#0F172A]">
          {title}
        </h3>
        <p className="md:text-[14px] text-[12px] font-normal text-[#0F172A] mt-2">
          {description}
        </p>
        <button className="bg-white text-blue-600 border-[2px] border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition mt-2 w-full">
          Take Lesson
        </button>
      </div>
    );
  }