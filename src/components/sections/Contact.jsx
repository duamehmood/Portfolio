
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { RiSendPlaneFill, RiCheckboxFill } from "@remixicon/react";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m13m5vx",
        "template_5ecuumm",
        form.current,
        "TRThLx662T3Lwu0lu"
      )
      .then((result) => {
        console.log("SUCCESS:", result.text);
        setDone(true);
        e.target.reset();
      })
      .catch((error) => {
        console.log("ERROR:", error.text);
      });
  };

  useEffect(() => {
    if (done) {
      const timer = setTimeout(() => setDone(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [done]);

  return (
    <div className="bg-primary text-white md:pt-10 pb-20 text-center relative">
      {/* Success Toast */}
      {done && (
        <div className="fixed left-1/2 top-10 z-[9999] -translate-x-1/2 flex items-center gap-3 bg-gradient-to-r from-[#7b68b8] via-[#CBACF9] to-[#533e99] text-white px-7 py-2 rounded-lg shadow-2xl border border-white/10">
          <span className="flex items-center justify-center bg-white/20 rounded-full w-8 h-8">
            <RiCheckboxFill className="text-[#533e99]" />
          </span>
          <span className="font-semibold tracking-wide">
            Message sent successfully!
          </span>
        </div>
      )}

      <div className="container mx-auto px-4">
        <h2 className="lg:text-[48px] md:text-[38px] text-[30px] font-[700] leading-[100%] tracking-[1px] 2xl:px-[270px] xl:px-[180px] md:px-[80px]">
          Ready to take <span className="text-secondary"> your</span> digital
          presence to the next level?
        </h2>
        <p className="text-[#C1C2D3] text-[16px] font-[400] pt-[10px] pb-[30px]">
          Reach out to me today and let's discuss how I can help you achieve
          your goals.
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="max-w-2xl mx-auto space-y-6 text-left" >
          <div className="relative group">
            <div
              className="
              absolute -inset-[2px] rounded-md
              bg-gradient-to-r from-[#CBACF9] via-[#6971A2] to-[#CBACF9] opacity-60
              group-focus-within:opacity-100 group-focus-within:shadow-[0_0_10px_3px_rgba(203,172,249,0.6)]
              transition-opacity duration-300 z-0
            " />
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              required
              className="relative z-10 w-full md:px-4 px-3 py-2 md:py-3 rounded-md
                bg-[#1d1d2e]/70 text-white border border-transparent
                focus:outline-none placeholder:text-[#bbb] transition-all duration-300 backdrop-blur-sm" />
          </div>

          <div className="relative group">
            <div
              className="
              absolute -inset-[2px] rounded-md
              bg-gradient-to-r from-[#CBACF9] via-[#6971A2] to-[#CBACF9] opacity-60
              group-focus-within:opacity-100 group-focus-within:shadow-[0_0_10px_3px_rgba(203,172,249,0.6)]
              transition-opacity duration-300 z-0 " />
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              required
              className="relative z-10 w-full md:px-4 px-3 py-2 md:py-3 rounded-md
                bg-[#1d1d2e]/70 text-white border border-transparent
                focus:outline-none placeholder:text-[#bbb] transition-all duration-300 backdrop-blur-sm" />
          </div>

          <div className="relative group">
            <div
              className="
              absolute -inset-[2px] rounded-md
              bg-gradient-to-r from-[#CBACF9] via-[#6971A2] to-[#CBACF9] opacity-60
              group-focus-within:opacity-100 group-focus-within:shadow-[0_0_10px_3px_rgba(203,172,249,0.6)]
              transition-opacity duration-300 z-0" />
            <textarea
              name="message"
              rows="5"
              placeholder="Your message"
              required
              className="relative z-10 w-full md:px-4 px-3 py-2 md:py-3 rounded-md
                bg-[#1d1d2e]/70 text-white border border-transparent
                focus:outline-none placeholder:text-[#bbb] transition-all duration-300  backdrop-blur-sm" />
          </div>

          <div className="pt-4 flex justify-center">
            <button
              type="submit"
              className="flex gap-1 items-center text-white px-8 py-3 rounded font-medium border-1 border-transparent bg-gradient-to-r from-[#6971A266] to-[#272A3C80] hover:from-[#272A3C80] hover:to-[#6971A266] hover:border-secondary transition duration-300 cursor-pointer" >
              Send Message{" "}
              <RiSendPlaneFill size="20" className="text-secondary" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
