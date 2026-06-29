import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { CONTACT } from "../constants";

/* Small floating contact buttons pinned to the bottom-right corner.
   Clicking WhatsApp opens a chat directly with a pre-filled message. */
const FloatingContact = () => {
  const waNumber = CONTACT.phoneNo.replace(/\D/g, "");
  const waHref = `https://wa.me/${waNumber}?text=${encodeURIComponent(
    "Hi Abhishek, I came across your portfolio and would like to connect."
  )}`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.4, type: "spring", stiffness: 200, damping: 18 }}
      className="fixed z-50 flex items-center gap-2 bottom-5 right-5 sm:gap-3 sm:bottom-6 sm:right-6"
    >
      {/* Hint pill (desktop) — also opens WhatsApp */}
      <a
        href={waHref}
        target="_blank"
        rel="noreferrer"
        className="hidden px-4 py-2 text-sm font-medium transition-colors rounded-full shadow-lg sm:block bg-white text-neutral-900 hover:bg-neutral-100"
      >
        Click here to contact
      </a>

      {/* WhatsApp */}
      <a
        href={waHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center justify-center text-2xl text-white transition-transform bg-green-500 rounded-full shadow-lg h-12 w-12 sm:h-14 sm:w-14 hover:scale-110"
      >
        <FaWhatsapp />
      </a>

      {/* Email */}
      <a
        href={`mailto:${CONTACT.email}`}
        aria-label="Send an email"
        className="flex items-center justify-center text-xl transition-transform border rounded-full shadow-lg h-12 w-12 sm:h-14 sm:w-14 bg-neutral-800 text-neutral-100 border-white/10 hover:scale-110"
      >
        <FiMail />
      </a>
    </motion.div>
  );
};

export default FloatingContact;
