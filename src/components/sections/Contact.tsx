import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, FileText } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };
  
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6 text-center">
          Get In <span className="text-accent">Touch</span>
        </h2>
        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
          Have a project in mind or want to discuss opportunities? I'm always open to new ideas and collaborations.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <form 
              onSubmit={handleSubmit}
              className="bg-primary-800/50 rounded-lg p-6 md:p-8 shadow-lg backdrop-blur-sm"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-primary-700/60 border ${
                      errors.name ? 'border-red-500' : 'border-primary-600'
                    } rounded-md text-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-primary-700/60 border ${
                      errors.email ? 'border-red-500' : 'border-primary-600'
                    } rounded-md text-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50`}
                    placeholder="Your email"
                  />
                  {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-primary-700/60 border ${
                    errors.subject ? 'border-red-500' : 'border-primary-600'
                  } rounded-md text-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50`}
                  placeholder="Subject of your message"
                />
                {errors.subject && <p className="mt-1 text-red-500 text-sm">{errors.subject}</p>}
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 bg-primary-700/60 border ${
                    errors.message ? 'border-red-500' : 'border-primary-600'
                  } rounded-md text-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50`}
                  placeholder="Your message"
                ></textarea>
                {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message}</p>}
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 bg-accent text-primary-900 font-medium rounded hover:bg-accent/90 transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send size={16} />
                </button>
                
                {submitSuccess && (
                  <p className="mt-4 text-green-400">
                    Your message has been sent successfully! I'll get back to you soon.
                  </p>
                )}
              </div>
            </form>
          </div>
          
          <div>
            <div className="bg-primary-800/50 rounded-lg p-6 md:p-8 shadow-lg backdrop-blur-sm mb-8">
              <h3 className="text-xl font-heading font-medium mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-accent mt-1">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Email</p>
                    <a href="mailto:rafay0704@gmail.com" className="text-slate-200 hover:text-accent">
                      rafay0704@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-accent mt-1">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Location</p>
                    <p className="text-slate-200">Dubai, UAE</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-accent mt-1">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Phone</p>
                    <a href="tel:+971553660781" className="text-slate-200 hover:text-accent">
                      +971 55 366 0781
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-primary-800/50 rounded-lg p-6 md:p-8 shadow-lg backdrop-blur-sm">
              <h3 className="text-xl font-heading font-medium mb-6">Connect With Me</h3>
              
              <div className="flex items-center gap-4 mb-6">
                <a href="https://github.com/rafay0704" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-700 flex items-center justify-center text-slate-300 hover:text-accent hover:bg-primary-600 transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/abdul-rafay-ab3ba0170" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-700 flex items-center justify-center text-slate-300 hover:text-accent hover:bg-primary-600 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-700 flex items-center justify-center text-slate-300 hover:text-accent hover:bg-primary-600 transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
              
              <div>
              <a 
  href="https://drive.google.com/uc?export=download&id=1hezdgNRpitRPKgPS0-TIS8UNtVjCTbsw"
  className="flex items-center justify-center gap-2 w-full px-6 py-3 border border-accent text-accent font-medium rounded hover:bg-accent/10 transition-colors"
>
  Download Resume
  <FileText size={16} />
</a>


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;