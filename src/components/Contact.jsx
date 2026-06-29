import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { CONTACT } from "../constants";
import SectionTitle from "./SectionTitle";

const inputClasses =
  "w-full mt-1 rounded-xl border border-white/10 bg-neutral-900/60 px-4 py-3 text-white placeholder:text-neutral-600 transition-colors focus:border-cyan-500/50 focus:outline-none";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const waNumber = CONTACT.phoneNo.replace(/\D/g, "");

  const buildMessage = (data) =>
    `New enquiry from your portfolio:\n\n` +
    `Name: ${data.name}\n` +
    `Email: ${data.email}\n\n` +
    `Message:\n${data.message}`;

  // Sends the form straight to Abhishek's WhatsApp (no backend needed)
  const sendWhatsApp = (data) => {
    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(
      buildMessage(data)
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp with your message!");
    reset();
  };

  // Opens the visitor's email app pre-addressed to Abhishek
  const sendEmail = (data) => {
    const subject = `Portfolio enquiry from ${data.name}`;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(buildMessage(data))}`;
    toast.success("Opening your email app...");
    reset();
  };

  const contactItems = [
    {
      Icon: FaWhatsapp,
      value: "Message on WhatsApp",
      href: `https://wa.me/${waNumber}?text=${encodeURIComponent(
        "Hi Abhishek, I came across your portfolio and would like to connect."
      )}`,
      external: true,
      iconColor: "text-green-400",
    },
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
            collaborations. Send the form straight to my WhatsApp or email, or
            reach out directly below.
          </p>
          <div className="flex flex-col gap-4 mt-2">
            {contactItems.map(({ Icon, value, href, external, iconColor }) => {
              const inner = (
                <>
                  <span
                    className={`flex items-center justify-center transition-colors border w-11 h-11 rounded-xl bg-white/5 border-white/5 group-hover:border-cyan-500/40 ${
                      iconColor || "text-cyan-300"
                    }`}
                  >
                    <Icon className="text-lg" />
                  </span>
                  <span className="break-all text-neutral-300 group-hover:text-white">
                    {value}
                  </span>
                </>
              );
              return href ? (
                <a
                  key={value}
                  href={href}
                  {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="flex items-center gap-4 group"
                >
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
          onSubmit={handleSubmit(sendWhatsApp)}
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

          <div className="flex flex-col gap-3 mt-2 sm:flex-row">
            <button
              type="button"
              onClick={handleSubmit(sendWhatsApp)}
              className="inline-flex items-center justify-center flex-1 gap-2 px-4 py-3 text-sm font-medium text-white transition bg-green-500 rounded-xl whitespace-nowrap hover:bg-green-600"
            >
              <FaWhatsapp className="text-base shrink-0" /> Send via WhatsApp
            </button>
            <button
              type="button"
              onClick={handleSubmit(sendEmail)}
              className="inline-flex items-center justify-center flex-1 gap-2 px-4 py-3 text-sm font-medium transition border rounded-xl whitespace-nowrap border-white/15 text-neutral-200 hover:bg-white/5"
            >
              <FiMail className="text-base shrink-0" /> Send via Email
            </button>
          </div>
        </motion.form>
      </div>

      {/* Map */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto mt-12 overflow-hidden border rounded-2xl border-white/10"
      >
        <iframe
          title="Location — Vancouver, British Columbia, Canada"
          src="https://maps.google.com/maps?q=Vancouver%2C%20British%20Columbia%2C%20Canada&z=11&output=embed"
          width="100%"
          height="320"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="map-dark block w-full"
        />
      </motion.div>

      <footer className="pt-10 mt-16 text-sm text-center border-t text-neutral-600 border-white/5">
        © {new Date().getFullYear()} Abhishek Pratap Mall · Built with React,
        Tailwind &amp; Framer Motion.
      </footer>
    </section>
  );
};

export default Contact;
