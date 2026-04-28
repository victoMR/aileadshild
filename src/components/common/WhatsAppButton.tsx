"use client";

export function WhatsAppButton() {
  const whatsappLink =
    "https://api.whatsapp.com/send/?phone=524423224935&text=Hola,%20me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20AI%20Lead%20Shield&type=phone_number&app_absent=0";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-6 md:bottom-10 md:right-8 lg:bottom-12 lg:right-10 z-30 w-14 h-14 md:w-16 md:h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300"
      title="Contactanos por WhatsApp"
    >
      <svg
        className="w-6 h-6 md:w-7 md:h-7 block"
        fill="currentColor"
        viewBox="0 0 448 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32 101.8 32 3.3 130.5 3.3 252.6c0 45 11.7 88.7 33.9 127.3L0 480l103.9-35.3c36.1 19.7 76.8 30.1 118 30.1h.1c122 0 220.6-98.5 220.6-220.6 0-59.3-23.1-115-64.7-156.1zM223.9 438.7h-.1c-38.1 0-75.4-10.3-108.1-29.7l-7.8-4.6-61.6 20.9 20.7-60.1-5.1-8.1C43.5 321.4 33.5 287.5 33.5 252.6 33.6 147.8 119.1 62.3 224 62.3c50.9 0 98.7 19.8 134.7 55.8 36 36 55.8 83.8 55.8 134.7.1 104.9-85.4 190.9-190.6 190.9zm101.8-142.3c-5.6-2.8-33.2-16.4-38.3-18.3-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18.3-17.6 22-3.2 3.7-6.5 4.2-12 1.4-32.7-16.4-54.1-29.3-75.7-66.5-5.7-9.8 5.7-9.1 16.4-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.7 57.4 2.8 3.7 39.2 60 95 84.2 13.3 5.7 23.7 9.1 31.8 11.7 13.4 4.3 25.6 3.7 35.2 2.2 10.7-1.6 33.2-13.5 37.9-26.6 4.7-13 4.7-24.1 3.3-26.6-1.4-2.5-5.1-3.9-10.7-6.7z" />
      </svg>
    </a>
  );
}
