import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Header from "../components/Header";
import Meta from "../components/Meta";
import Link from "next/link";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [messageBody, setMessageBody] = useState("");
  const [loading, setLoading] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_9krjany",
        "template_npw1bqt",
        form.current,
        "Kk1GXDbI61romaMWa"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage(true);
          setEmail("");
          setName("");
          setSubject("");
          setMessageBody("");
          setLoading(false);
          setTimeout(() => setMessage(false), 5000);
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <>
      <Meta
        title={"Webmtl Agence | Contactez-nous !"}
        description={
          "Envie de créer un site web ou une application web ? Vous êtes au bon endroit !"
        }
      />
      <div className="main">
        <Header />
        <section className="header_textContainer">
          <div className="header_textContainer--flex">
            <div>
              <h1>Contactez-nous</h1>
              <h1>pour parler</h1>
              <h1>de votre projet.</h1>
            </div>
          </div>
          <p className="contactP">
            Nous sommes à votre disposition pour toutes Informations
            supplémentaires.
          </p>
        </section>

        <section className="py-20 px-4 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Contact Form */}
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100" data-aos="fade-up">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Envoyez-nous un message</h2>
                    <form
                        id="contact-form"
                        ref={form}
                        onSubmit={sendEmail}
                        className="space-y-6"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:border-[#FF6060] focus:bg-white focus:ring-0 transition-colors duration-300"
                                    placeholder="Votre nom"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:border-[#FF6060] focus:bg-white focus:ring-0 transition-colors duration-300"
                                    placeholder="votre@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Objet</label>
                            <input
                                type="text"
                                name="subject"
                                className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:border-[#FF6060] focus:bg-white focus:ring-0 transition-colors duration-300"
                                placeholder="Sujet de votre message"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                            <textarea
                                rows={5}
                                name="message"
                                className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:border-[#FF6060] focus:bg-white focus:ring-0 transition-colors duration-300 resize-none"
                                placeholder="Dites-nous en plus sur votre projet..."
                                value={messageBody}
                                onChange={(e) => setMessageBody(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        
                        <button 
                            type="submit"
                            disabled={loading}
                            className="w-full py-4 bg-gray-900 text-white font-bold rounded-full hover:bg-[#FF6060] transition-colors duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? "Envoi en cours..." : "Envoyer le message"}
                        </button>

                        {message && (
                            <div className="p-4 bg-green-50 text-green-700 rounded-xl text-center font-medium animate-fade-in">
                                Votre message a bien été envoyé ! Nous vous répondrons sous 24h.
                            </div>
                        )}
                    </form>
                </div>

                {/* Contact Info & Questionnaire */}
                <div className="space-y-8" data-aos="fade-up" data-aos-delay="200">
                    <div className="bg-gray-900 text-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6060] rounded-full blur-3xl opacity-20 -mr-16 -mt-16"></div>
                        
                        <h2 className="text-3xl font-bold mb-8 relative z-10">Informations</h2>
                        <div className="space-y-6 relative z-10">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <i className="fas fa-map-marker-alt text-[#FF6060] text-xl"></i>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Localisation</h3>
                                    <p className="text-gray-400">Montréal, QC</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <i className="fas fa-phone text-[#FF6060] text-xl"></i>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Téléphone</h3>
                                    <a href="tel:+14384065358" className="text-gray-400 hover:text-white transition-colors">
                                        +1 438 406 5358
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <i className="fas fa-envelope text-[#FF6060] text-xl"></i>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Email</h3>
                                    <a href="mailto:contact@jeanchoquet.fr" className="text-gray-400 hover:text-white transition-colors">
                                        contact@jeanchoquet.fr
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#FF6060] rounded-3xl p-8 md:p-12 shadow-xl text-white text-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
                        <h2 className="text-2xl font-bold mb-4 relative z-10">Vous préférez un devis direct ?</h2>
                        <p className="mb-8 text-white/90 relative z-10">
                            Remplissez notre questionnaire détaillé pour recevoir une estimation précise.
                        </p>
                        <Link 
                            href="https://forms.gle/DoXGPtBHLjyKdhyJA" 
                            target="_blank"
                            className="inline-block px-8 py-3 bg-white text-[#FF6060] font-bold rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg relative z-10"
                        >
                            Remplir le questionnaire
                        </Link>
                    </div>
                </div>
            </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
