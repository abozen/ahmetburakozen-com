'use client';

import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
  
    try {
      await emailjs.send(
        'service_wb03ipd',     // ← az önce aldığın Service ID
        'template_8s5r13f',    // ← Template ID
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          time: new Date().toLocaleString()
        },
        'ft_n4MOPEgxW8VEcH'      // ← Public API Key
      );
  
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (err) {
      setError('Message failed to send. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  

  const contactInfo = [
    {
      icon: <Mail className="text-purple-400" />,
      title: 'Email',
      value: 'abozen2k@gmail.com',
      link: 'mailto:abozen2k@gmail.com'
    },
    {
      icon: <Phone className="text-blue-400" />,
      title: 'Phone',
      value: '+90 533 133 08 03',
      link: 'tel:+905331330803'
    },
    {
      icon: <MapPin className="text-pink-400" />,
      title: 'Location',
      value: 'Istanbul, Turkey',
      link: 'https://maps.google.com/?q=Istanbul,Turkey'
    }
  ];

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/ahmetburak', label: 'Github' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/ahmetburak', label: 'LinkedIn' },
  ];

  return (
    <section id="contact" className="section bg-neutral-950" dir="ltr">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          <span className="gradient-text">Get In Touch</span>
        </h2>
        
        <div className="grid gap-10 md:grid-cols-2">
          {/* Contact form */}
          <div className="glass p-8 order-2 md:order-1">
            <h3 className="mb-6 text-2xl font-bold">Send me a message</h3>
            {submitSuccess ? (
              <div className="rounded-lg bg-green-500/20 p-4 text-green-400">
                <p className="font-medium">Your message has been sent successfully!</p>
                <p className="text-sm">I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} dir="ltr">
                <div className="mb-4 grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-400">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none"
                      placeholder="John Doe"
                      dir="ltr"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-400">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none"
                      placeholder="john@example.com"
                      dir="ltr"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-400">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none"
                    placeholder="How can I help you?"
                    dir="ltr"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-400">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none"
                    placeholder="Questions? Thoughts? Just reach out."
                    dir="ltr"
                  ></textarea>
                </div>
                
                {error && (
                  <div className="mb-4 rounded-lg bg-red-500/20 p-3 text-red-400">
                    {error}
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Send Message <Send size={18} />
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact information */}
          <div className="order-1 md:order-2">
            <p className="mb-8 text-lg text-gray-300">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="mb-10 space-y-6">
              {contactInfo.map((info, index) => (
                <a 
                  key={index}
                  href={info.link}
                  className="flex items-center gap-4 transition-transform hover:-translate-x-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-800 text-purple-400">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-400">{info.title}</h3>
                    <p className="text-lg font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
            
            {/* Social media links */}
            <div>
              <h3 className="mb-4 text-xl font-bold">Connect with me</h3>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    aria-label={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-800 text-gray-400 transition-all hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500 hover:text-white"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;