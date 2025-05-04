import { PageImages } from './images/PageImages';

export default function SeparationSection() {
  return (
    <section className="bg-[#0F172A] py-16 px-6">
      <div className="flex flex-col md:flex-row items-center justify-center md:gap-64 gap-10">
        <div className="flex flex-col items-center text-center gap-2">
          <div className="text-[#FACC15] text-[72px]">
            <PageImages.heart />
          </div>

          <h2 className="text-yellow-400 text-[72px] font-extrabold">
            195
          </h2>

          <p className="text-[#FACC15] text-[24px] font-normal">
            user countries
          </p>
        </div>

        <div className="flex flex-col items-center text-center gap-2">
          <div className="text-[#FACC15] text-[72px]">
            <PageImages.diamond />
          </div>

          <h2 className="text-[#FACC15] text-[72px] font-extrabold">
            1M
          </h2>

          <p className="text-[#FACC15] text-[24px] font-normal">
            valued teachers
          </p>
        </div>

        <div className="flex flex-col items-center text-center gap-2">
          <div className="text-[#FACC15] text-[72px]">
            <PageImages.school />
          </div>

          <h2 className="text-[#FACC15] text-[72px] font-extrabold">
            17M
          </h2>

          <p className="text-[#FACC15] text-[24px] font-normal">
            happy students
          </p>
        </div>
      </div>
    </section>
  );
}
