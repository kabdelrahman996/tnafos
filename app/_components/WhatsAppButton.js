import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  const phoneNumber = "966581500704";
  const message = "السلام عليكم، أرغب في الاستفسار عن خدماتكم في مجموعة تنافس.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 z-[999] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:bg-[#20ba5a] transition-all duration-300 group"
      aria-label="Contact us on WhatsApp"
    >
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-primary text-xs font-bold py-2 px-3 rounded-sm shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-100">
        تحدث معنا مباشرة
      </span>

      <FaWhatsapp className="text-3xl md:text-4xl" />

      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none"></span>
    </a>
  );
}

export default WhatsAppButton;
