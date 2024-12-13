import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Contactez-nous
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Une question ? N'hésitez pas à nous contacter
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center p-8 bg-gray-800 rounded-lg">
            <Mail className="h-8 w-8 text-purple-500" />
            <h3 className="mt-4 text-lg font-medium text-white">Email</h3>
            <p className="mt-2 text-gray-400">contact@pixelforge.com</p>
          </div>

          <div className="flex flex-col items-center p-8 bg-gray-800 rounded-lg">
            <MapPin className="h-8 w-8 text-purple-500" />
            <h3 className="mt-4 text-lg font-medium text-white">Adresse</h3>
            <p className="mt-2 text-gray-400">123 rue du Gaming, Paris</p>
          </div>

          <div className="flex flex-col items-center p-8 bg-gray-800 rounded-lg">
            <Phone className="h-8 w-8 text-purple-500" />
            <h3 className="mt-4 text-lg font-medium text-white">Téléphone</h3>
            <p className="mt-2 text-gray-400">+33 1 23 45 67 89</p>
          </div>
        </div>

        <form className="mt-12 max-w-xl mx-auto">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400">
                Nom
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Envoyer
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}