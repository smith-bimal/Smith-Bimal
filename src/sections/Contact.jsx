import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { AtSign, Paperclip, Send } from 'lucide-react';

const Contact = () => {
  const { themeColors } = useTheme();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'Hiring',
    budget: '',
    message: ''
  });
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the form data to a server
    console.log(formData, file);

    // Show success message
    setSuccess(true);

    // Reset form after a delay
    setTimeout(() => {
      setSuccess(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: 'Hiring',
        budget: '',
        message: ''
      });
      setFile(null);
    }, 3000);
  };

  return (
    <section id="contact" className="lg:py-20 py-16">
      <div className="max-w-4xl">
        <div className="mb-12">
          <h4 className={`flex items-center ${themeColors.text} font-medium text-sm mb-4 animate-fadeIn border rounded-full w-fit px-2 py-0.5`}>
            <AtSign className="w-4 mr-2" /> Contact
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Work <span className={themeColors.text}>Together!</span>
          </h2>
          <h3 className="text-2xl mb-6">gbbeemal@gmail.com</h3>
          <p className="text-neutral-400">* Marked fields are required to fill.</p>
        </div>

        {success && (
          <div className="bg-green-500/20 border border-green-500 text-green-500 px-4 py-3 rounded mb-8">
            Your message was sent successfully!
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="fullName" className="block mb-2 font-medium">
                Full Name <sup className={themeColors.text}>*</sup>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your Full Name"
                required
                className={`w-full bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-full py-3 px-4 focus:outline-none ${themeColors.focus} transition-colors`}
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 font-medium">
                Email <sup className={themeColors.text}>*</sup>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email address"
                required
                className={`w-full bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-full py-3 px-4 focus:outline-none ${themeColors.focus} transition-colors`}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block mb-2 font-medium">
                Phone <span className="text-neutral-500">(optional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone number"
                className={`w-full bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-full py-3 px-4 focus:outline-none ${themeColors.focus} transition-colors`}
              />
            </div>

            <div>
              <label htmlFor="subject" className="block mb-2 font-medium">
                Subject <sup className={themeColors.text}>*</sup>
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className={`w-full bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-full py-3 px-4 focus:outline-none ${themeColors.focus} transition-colors appearance-none`}
              >
                <option value="Hiring" className='bg-neutral-800'>Hiring</option>
                <option value="Collaboration" className='bg-neutral-800'>Collaboration</option>
                <option value="Other" className='bg-neutral-800'>Other</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="message" className="block mb-2 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows="4"
                className={`w-full bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-3xl py-3 px-4 focus:outline-none ${themeColors.focus} transition-colors`}
              ></textarea>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="attachment" className="inline-flex items-center cursor-pointer bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-full py-3 px-4 hover:bg-neutral-800/80 transition-colors">
                <i className="las la-cloud-upload-alt mr-2 text-xl"></i>
                Add an attachment
                <input
                  type="file"
                  id="attachment"
                  name="attachment"
                  onChange={handleFileChange}
                  className="hidden"
                  accept="audio/*,video/*,image/*"
                />
              </label>
              {file &&
                <div className='flex items-center mt-2 ml-4 gap-2 text-neutral-400'>
                  <Paperclip className='min-w-4 w-4' />
                  <p className="text-sm">{file.name}</p>
                </div>
              }
            </div>

            <div className="">
              <button
                type="submit"
                className={`flex items-center justify-center ${themeColors.bg} border-2 ${themeColors.border} hover:opacity-90 py-3 px-6 rounded-full transition-all hover:bg-transparent ${themeColors.hover}`}
              >
                <Send className='w-5 mr-2' /> Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
