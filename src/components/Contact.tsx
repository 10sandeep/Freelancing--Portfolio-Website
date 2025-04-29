import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, Check, Instagram, Facebook, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create FormData object
      const formDataToSend = new FormData();
      
      // Add form fields
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);
      
      // Add your Web3Forms access key
      formDataToSend.append('access_key', 'a2140f9b-f69d-44ba-830e-4e3b0e508d16');
      
      // Add recipient email (this will override the default recipient in Web3Forms)
      formDataToSend.append('to_email', 'sandeepnayak1724@gmail.com');
      
      // Send data to Web3Forms API
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });
      
      const data = await response.json();
      
      if (data.success) {
        // Reset form and show success message
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } else {
        throw new Error(data.message || 'Form submission failed');
      }
    } catch (error) {
      setSubmitError('Failed to send message. Please try again later.');
      console.error('Error sending form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 -mt-20">
          <div className="inline-block mb-2 px-4 py-1 bg-indigo-900/30 rounded-full text-indigo-300 text-sm font-medium backdrop-blur-sm">
            Reach Out
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss how I can help your business? I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl shadow-2xl shadow-indigo-500/10 p-8">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Send me a message</h3>
            
            {submitSuccess && (
              <div className="bg-green-900/20 border border-green-500/30 text-green-300 px-4 py-3 rounded-lg mb-6 flex items-start backdrop-blur-sm">
                <div className="flex-shrink-0">
                  <Check className="h-5 w-5 text-green-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm">Your message has been sent successfully. I'll get back to you as soon as possible!</p>
                </div>
              </div>
            )}
            
            {submitError && (
              <div className="bg-red-900/20 border border-red-500/30 text-red-300 px-4 py-3 rounded-lg mb-6">
                <p className="text-sm">{submitError}</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              {/* Hidden field for recipient email */}
              <input type="hidden" name="to_email" value="sandeepnayak1724@gmail.com" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="Your Good Name Sir?"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="Your Mail Address"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 text-white appearance-none"
                >
                  <option value="" className="bg-gray-900">Select a subject</option>
                  <option value="Project Inquiry" className="bg-gray-900">Project Inquiry</option>
                  <option value="Job Opportunity" className="bg-gray-900">Job Opportunity</option>
                  <option value="Collaboration" className="bg-gray-900">Collaboration</option>
                  <option value="General Question" className="bg-gray-900">General Question</option>
                </select>
              </div>
              
              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 text-white placeholder-gray-400"
                  placeholder="Tell me about your project or inquiry..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-medium px-6 py-4 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg shadow-indigo-600/30 ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin mr-3 h-5 w-5 text-white" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={16} className="ml-2" />
                  </>
                )}
              </button>
            </form>
          </div>
          
          <div>
            <div className="backdrop-blur-lg bg-gradient-to-br from-indigo-900/50 to-cyan-900/50 border border-white/10 rounded-2xl shadow-2xl shadow-indigo-500/10 p-8 mb-8 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-indigo-500 rounded-full blur-3xl opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-cyan-500/20 to-transparent"></div>
              
              <h3 className="text-2xl font-bold mb-8 relative ">Contact Information</h3>
              
              <div className="space-y-8 relative">
                <div className="flex items-start group">
                  <div className="bg-white/10 p-3 rounded-lg mr-4 group-hover:bg-indigo-500 transition-all duration-300">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300 mb-1">Email</p>
                    <a href="mailto:sandeepnayak1724@gmail.com" className="text-lg font-medium hover:text-cyan-300 transition-colors">
                      sandeepnayak1724@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="bg-white/10 p-3 rounded-lg mr-4 group-hover:bg-indigo-500 transition-all duration-300">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300 mb-1">Phone</p>
                    <a href="tel:+918456834944" className="text-lg font-medium hover:text-cyan-300 transition-colors">
                      +91 8456834944
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="bg-white/10 p-3 rounded-lg mr-4 group-hover:bg-indigo-500 transition-all duration-300">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300 mb-1">Location</p>
                    <p className="text-lg font-medium">
                     Bhubaneswar, Odisha, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl shadow-2xl shadow-indigo-500/10 p-8">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Availability</h3>
              <p className="text-gray-300 mb-6">
                I'm currently available for freelance work. I specialize in medium to large size projects but I'm always open to discussing new opportunities regardless of size.
              </p>
              
              <div className="border-t border-white/10 pt-6 mt-6">
                <h4 className="font-semibold mb-4 text-gray-200">Connect with me</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-white/5 hover:bg-indigo-500/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-white/5 hover:bg-indigo-500/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-white/5 hover:bg-indigo-500/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-white/5 hover:bg-indigo-500/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;