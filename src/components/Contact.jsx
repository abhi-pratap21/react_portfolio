import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiSend } from "react-icons/fi";
import { CONTACT } from "../constants";
import SectionTitle from "./SectionTitle";

const inputClasses =
  "w-full mt-1 rounded-xl border border-white/10 bg-neutral-900/60 px-4 py-3 text-white placeholder:text-neutral-600 transition-colors focus:border-cyan-500/50 focus:outline-none";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post("https://getform.io/f/anlelnoa", {
        name: data.name,
        email: data.email,
        message: data.message,
      });
      toast.success("Message sent — thanks, I'll get back to you soon!");
      reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  const contactItems = [
    {
      Icon: FiPhone,
      value: CONTACT.phoneNo,
      href: `tel:${CONTACT.phoneNo.replace(/\s/g, "")}`,
    },
    { Icon: FiMail, value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { Icon: FiMapPin, value: CONTACT.address, href: null },
  ];

  return (
    <section id="contact" className="py-24 scroll-mt-24">
      <SectionTitle
        kicker="Contact"
        subtitle="Have an opportunity, a project, or an idea? Let's talk."
      >
        Get in <span className="text-neutral-500">Touch</span>
      </SectionTitle>
      <div className="mb-14" />

      <div className="grid max-w-5xl gap-10 mx-auto lg:grid-cols-2">
        {/* Left: info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <h3 className="text-2xl font-semibold text-white">
            Let&apos;s build something great together.
          </h3>
          <p className="text-neutral-400">
            I&apos;m open to full-time roles, freelance projects, and
            collaborations. Reach out through the form or directly via the
            details below.
          </p>
          <div className="flex flex-col gap-4 mt-2">
            {contactItems.map(({ Icon, value, href }) => {
              const inner = (
                <>
                  <span className="flex items-center justify-center transition-colors border w-11 h-11 rounded-xl bg-white/5 text-cyan-300 border-white/5 group-hover:border-cyan-500/40">
                    <Icon />
                  </span>
                  <span className="break-all text-neutral-300 group-hover:text-white">
                    {value}
                  </span>
                </>
              );
              return href ? (
                <a key={value} href={href} className="flex items-center gap-4 group">
                  {inner}
                </a>
              ) : (
                <div key={value} className="flex items-center gap-4 group">
                  {inner}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Right: form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 p-8 border rounded-2xl border-white/10 bg-white/[0.03] backdrop-blur"
        >
          <div>
            <label className="text-sm text-neutral-400">Full Name</label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Your name"
              className={inputClasses}
            />
            {errors.name && (
              <span className="text-xs text-red-400">Name is required</span>
            )}
          </div>
          <div>
            <label className="text-sm text-neutral-400">Email Address</label>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="you@example.com"
              className={inputClasses}
            />
            {errors.email && (
              <span className="text-xs text-red-400">Email is required</span>
            )}
          </div>
          <div>
            <label className="text-sm text-neutral-400">Message</label>
            <textarea
              {...register("message", { required: true })}
              rows={4}
              placeholder="Tell me about your project or opportunity..."
              className={`${inputClasses} resize-none`}
            />
            {errors.message && (
              <span className="text-xs text-red-400">Message is required</span>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 mt-2 font-medium text-white transition rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:opacity-90 disabled:opacity-50"
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                Send Message <FiSend />
              </>
            )}
          </button>
        </motion.form>
      </div>

      <footer className="pt-10 mt-20 text-sm text-center border-t text-neutral-600 border-white/5">
        © {new Date().getFullYear()} Abhishek Pratap Mall · Built with React,
        Tailwind &amp; Framer Motion.
      </footer>
    </section>
  );
};

export default Contact;
