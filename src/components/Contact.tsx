import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const validateForm = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email';
    }
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API submission delay
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSent(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        // Clear success notification after 5s
        setTimeout(() => setIsSent(false), 5000);
      }, 1500);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section
      id="contact"
      className="relative flex min-h-screen flex-col justify-between px-6 pt-24 pb-12 md:px-12 lg:px-24 max-w-7xl mx-auto w-full"
    >
      <div id="contact-inner-container" className="flex-1 flex flex-col justify-center">
        {/* Section title */}
        <div id="contact-header" className="mb-12">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-400">06. Connection</span>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl mt-2">
            Get In Touch
          </h2>
          <div className="mt-2 h-1 w-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
        </div>

        {/* Form & Social details columns */}
        <div id="contact-columns" className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Contact Form (7 Cols) */}
          <div id="contact-form-container" className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 md:p-8 border border-white/5 shadow-2xl relative overflow-hidden">
              <AnimatePresence mode="wait">
                {isSent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center py-12 space-y-4"
                  >
                    <CheckCircle2 size={50} className="text-cyan-400 animate-bounce" />
                    <h3 className="font-display text-xl font-bold text-white">Message Transmitted!</h3>
                    <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
                      Thank you for reaching out, Mohammadfesal will review your message and reply back shortly.
                    </p>
                    <button
                      id="contact-send-another-btn"
                      onClick={() => setIsSent(false)}
                      className="mt-2 font-mono text-xs text-cyan-400 hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    id="contact-form"
                    className="space-y-4"
                  >
                    {/* Name Field */}
                    <div className="space-y-1.5">
                      <label htmlFor="name-input" className="block font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        Your Name
                      </label>
                      <input
                        id="name-input"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className={`w-full rounded-xl bg-slate-950/40 border ${
                          errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/5 focus:border-cyan-500/50'
                        } px-4 py-3 text-sm text-slate-200 placeholder-slate-600 outline-none transition-all focus:bg-slate-950/60`}
                      />
                      {errors.name && (
                        <div className="flex items-center gap-1 text-[10px] text-red-400 font-mono">
                          <AlertCircle size={10} />
                          <span>{errors.name}</span>
                        </div>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="space-y-1.5">
                      <label htmlFor="email-input" className="block font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        Email Address
                      </label>
                      <input
                        id="email-input"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="johndoe@example.com"
                        className={`w-full rounded-xl bg-slate-950/40 border ${
                          errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-white/5 focus:border-cyan-500/50'
                        } px-4 py-3 text-sm text-slate-200 placeholder-slate-600 outline-none transition-all focus:bg-slate-950/60`}
                      />
                      {errors.email && (
                        <div className="flex items-center gap-1 text-[10px] text-red-400 font-mono">
                          <AlertCircle size={10} />
                          <span>{errors.email}</span>
                        </div>
                      )}
                    </div>

                    {/* Subject Field */}
                    <div className="space-y-1.5">
                      <label htmlFor="subject-input" className="block font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        Subject
                      </label>
                      <input
                        id="subject-input"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Collaboration / Internship Opportunity"
                        className={`w-full rounded-xl bg-slate-950/40 border ${
                          errors.subject ? 'border-red-500/50 focus:border-red-500' : 'border-white/5 focus:border-cyan-500/50'
                        } px-4 py-3 text-sm text-slate-200 placeholder-slate-600 outline-none transition-all focus:bg-slate-950/60`}
                      />
                      {errors.subject && (
                        <div className="flex items-center gap-1 text-[10px] text-red-400 font-mono">
                          <AlertCircle size={10} />
                          <span>{errors.subject}</span>
                        </div>
                      )}
                    </div>

                    {/* Message Field */}
                    <div className="space-y-1.5">
                      <label htmlFor="message-input" className="block font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        Message Content
                      </label>
                      <textarea
                        id="message-input"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Hi Mohammadfesal, I came across your portfolio..."
                        rows={5}
                        className={`w-full rounded-xl bg-slate-950/40 border ${
                          errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-white/5 focus:border-cyan-500/50'
                        } px-4 py-3 text-sm text-slate-200 placeholder-slate-600 outline-none transition-all focus:bg-slate-950/60 resize-none`}
                      />
                      {errors.message && (
                        <div className="flex items-center gap-1 text-[10px] text-red-400 font-mono">
                          <AlertCircle size={10} />
                          <span>{errors.message}</span>
                        </div>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="relative group w-full overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/10 transition-all hover:-translate-y-0.5 hover:shadow-cyan-500/20 active:scale-95 disabled:opacity-50"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                            <span>Sending Transmission...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send size={15} />
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-transform duration-300 group-hover:translate-x-0" />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Contact Details & Social Hub (5 Cols) */}
          <div id="contact-social-info" className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-3xl p-6 md:p-8 border border-white/5 shadow-2xl space-y-6">
              <div className="space-y-2">
                <h3 className="font-display text-xl font-bold text-white">Let's build together</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Have a project idea, a student workshop request, or an open internship position? Reach out via the form, or connect through social links below. I am always open to discussions!
                </p>
              </div>

              {/* Direct Info list */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-slate-500 uppercase tracking-wider">Email Direct</span>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-cyan-400 transition-colors">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-slate-500 uppercase tracking-wider">Current Location</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-200">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Responsive Social Buttons Grid */}
              <div className="grid grid-cols-1 gap-3 pt-4 border-t border-white/5">
                <a
                  id="contact-link-linkedin"
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-2xl bg-slate-950/40 hover:bg-cyan-500/5 border border-white/5 hover:border-cyan-500/20 px-4 py-3.5 text-slate-300 hover:text-cyan-400 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin size={18} />
                    <span className="text-xs font-semibold">LinkedIn Profile</span>
                  </div>
                  <span className="font-mono text-[10px] text-slate-500 group-hover:text-cyan-400 transition-colors">Connect →</span>
                </a>

                <a
                  id="contact-link-github"
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-2xl bg-slate-950/40 hover:bg-cyan-500/5 border border-white/5 hover:border-cyan-500/20 px-4 py-3.5 text-slate-300 hover:text-cyan-400 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2.5">
                    <Github size={18} />
                    <span className="text-xs font-semibold">GitHub Profile</span>
                  </div>
                  <span className="font-mono text-[10px] text-slate-500 group-hover:text-cyan-400 transition-colors">Follow →</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer copyright */}
      <footer id="contact-footer" className="mt-20 border-t border-white/5 pt-8 text-center font-mono text-[10px] tracking-wider text-slate-500">
        <p>© 2026 {PERSONAL_INFO.name}. All rights reserved.</p>
        <p className="mt-1 text-[9px] opacity-70">
          Built with React 19, Tailwind CSS v4, and Motion.
        </p>
      </footer>
    </section>
  );
}
