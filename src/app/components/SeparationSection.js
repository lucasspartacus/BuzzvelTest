import { PageImages } from './images/PageImages';

export default function SeparationSection() {
  return (
    <section
      className="bg-[#0F172A] py-16 px-6"
      aria-labelledby="impact-metrics-heading"
    >
      <h2 id="impact-metrics-heading" className="sr-only">
        Global impact metrics
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center md:gap-64 gap-10 md:space-y-0 space-y-6">
        {/* Metric 1 */}
        <div className="flex flex-col items-center text-center ">
          <div className="text-[#FACC15] text-[72px]" aria-hidden="true">
            <PageImages.heart />
          </div>
          <dl>
            <dt className="sr-only">User countries</dt>
            <dd className="text-yellow-400 text-[72px] font-extrabold">195</dd>
            <dd className="text-[#FACC15] text-[24px] font-normal">user countries</dd>
          </dl>
        </div>

        {/* Metric 2 */}
        <div className="flex flex-col items-center text-center gap-2">
          <div className="text-[#FACC15] text-[72px]" aria-hidden="true">
            <PageImages.diamond />
          </div>
          <dl>
            <dt className="sr-only">Valued teachers</dt>
            <dd className="text-[#FACC15] text-[72px] font-extrabold">1M</dd>
            <dd className="text-[#FACC15] text-[24px] font-normal">valued teachers</dd>
          </dl>
        </div>

        {/* Metric 3 */}
        <div className="flex flex-col items-center text-center gap-2">
          <div className="text-[#FACC15] text-[72px]" aria-hidden="true">
            <PageImages.school />
          </div>
          <dl>
            <dt className="sr-only">Happy students</dt>
            <dd className="text-[#FACC15] text-[72px] font-extrabold">17M</dd>
            <dd className="text-[#FACC15] text-[24px] font-normal">happy students</dd>
          </dl>
        </div>
      </div>
    </section>
  );
}
