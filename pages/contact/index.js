'use client';
import Circles from "@/components/Circles";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/variants";
import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok && data.success) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (err) {
            console.error('Submit error:', err);
            setStatus('error');
        }
    };

    return (
        <div className='h-full bg-primary/30'>
            <div className="container mx-auto py-32 text-center xl:text-left flex
            items-center justify-center h-full">
                <div className="flex flex-col w-full max-w-[700px]">
                    <motion.h2
                        variants={fadeIn('up', 0.2)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className="h2 text-center mb-12">
                        Let&apos;s
    <span className="text-accent"> Connect.</span>
                    </motion.h2>

                    <motion.form
                        onSubmit={handleSubmit}
                        variants={fadeIn('up', 0.4)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className="flex-1 flex flex-col gap-6 w-full mx-auto">

                        <div className="flex gap-x-6 w-full">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Name"
                                className="input"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                className="input"
                                required
                            />
                        </div>

                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                            className="input"
                            required
                        />

                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Message"
                            className="textarea rounded-lg"
                            required
                        />

                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="btn rounded-full border border-white/50 max-w-[170px]
                            px-8 transition-all duration-300 flex items-center justify-center
                            overflow-hidden hover:border-accent group disabled:opacity-50
                            disabled:cursor-not-allowed">
                            <span className="group-hover:-translate-y-[120%] group-hover:opacity-0
                            transition-all duration-500">
                                {status === 'sending' ? 'Sending...' : "Let's talk"}
                            </span>
                            <BsArrowRight className="translate-y-[120%] opacity-0 group-hover:flex
                            group-hover:-translate-y-0 group-hover:opacity-100 transition-all
                            duration-300 absolute text-[22px]" />
                        </button>

                        {status === 'success' && (
                           <p className="text-green-400 text-sm text-center">
    ✅ Message sent successfully! We&apos;ll be in touch soon.
</p>
                        )}
                        {status === 'error' && (
                            <p className="text-red-400 text-sm text-center">
                                ❌ Something went wrong. Please try again or email us directly.
                            </p>
                        )}
                    </motion.form>
                </div>
            </div>
        </div>
    );
};

export default Contact;