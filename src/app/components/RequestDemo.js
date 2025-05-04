export default function RequestDemo() {
    return (
      <section className="bg-[#EA580C] py-20 px-6">
        <div className="max-w-3xl mx-auto text-white text-center flex flex-col items-center gap-10 ">
          {/* Title */}
          <h2 className="md:text-[56px] text-[32px]  font-extrabold md:w-[120%] w-[90%]" >
            Ready for your next project?
          </h2>
  
          {/* Subtitle */}
          <p className="md:text-[32px] text-[18px] font-normal md:w-[110%] w-[90%]">
             Sit elit feugiat turpis sed integer integer accumsan turpis.
          </p>
  
          {/* Form */}
          <form className="w-full flex flex-col gap-6 md:px-12 px-1">
            <label className="text-left">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="md:w-full w-[102%] px-5 py-3 rounded-lg text-black placeholder-[##A6A6A6] bg-white "
              required
            />
            <label className="text-left">Message</label>
            <textarea
              placeholder="What are you say ?"
              rows={3}
              className="md:w-full w-[102%] px-5 py-3 rounded-lg text-black placeholder-[#A6A6A6] resize-none bg-white"
              required
            />
           <div className="flex justify-center">
            <button
                type="submit"
                className="bg-[#0F172A] text-[24px] text-white font-semibold py-3 px-6 rounded-lg md:w-[40%] w-[60%] hover:bg-white hover:text-[#0F172A] transition"
            >
                Request Demo
            </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
  