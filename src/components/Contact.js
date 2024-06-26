import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Contact = () => {
  return (
    // component
    <section id='contact' class="text-gray-600 body-font relative">
      <div class="absolute inset-0 bg-slate-700">
        <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d115583.39238048015!2d89.3812736!3d25.136332799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1714240191251!5m2!1sen!2sbd"></iframe>
      </div>
      <div class="container px-5 py-24 mx-auto flex">
        <div class="lg:w-1/3 md:w-1/2 bg-black rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 class="text-red-600 text-base mb-1 font-medium title-font uppercase">Feedback</h2>
          <p class="leading-relaxed mb-5 text-slate-300">Post-ironic portland shabby chic echo park, banjo fashion axe</p>


          <div class="relative mb-4">
            <label for="name" class="leading-7 text-sm text-slate-300">Full Name</label>
            <input type="name" id="name" name="name" class="w-full bg-transparent rounded border border-slate-600 focus:border-red-600 focus:ring-2 focus:ring-red-600 text-base outline-none text-slate-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>


          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-slate-300">Email</label>
            <input type="email" id="email" name="email" class="w-full bg-transparent rounded border border-slate-600 focus:border-red-600 focus:ring-2 focus:ring-red-600 text-base outline-none text-slate-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div class="relative mb-4">
            <label for="message" class="leading-7 text-sm text-slate-300">Message</label>
            <textarea id="message" name="message" class="w-full bg-transparent rounded border border-slate-600 focus:border-red-600 focus:ring-2 focus:ring-red-600 h-32 text-base outline-none text-slate-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
          <button class="text-red-600 border-0 py-2 px-6 focus:outline-none hover: rounded text-lg  hover:transition hover:scale-110">Send <FontAwesomeIcon icon={faArrowRight} /></button>
          <p class="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;