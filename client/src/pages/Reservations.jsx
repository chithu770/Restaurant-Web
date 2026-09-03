import React, { useState } from 'react';

const Reservations = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        partySize: 2
    });
    
    const [status, setStatus] = useState('idle'); // idle, loading_otp, otp_verification, verifying, success, error
    const [errorMessage, setErrorMessage] = useState('');
    
    // OTP states
    const [otp, setOtp] = useState('');
    const [testOtpToDisplay, setTestOtpToDisplay] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleRequestOtp = async (e) => {
        e.preventDefault();
        setStatus('loading_otp');
        setErrorMessage('');

        try {
            const response = await fetch('/api/reservations/request-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    partySize: Number(formData.partySize)
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to request OTP');
            }

            // OTP Requested successfully
            setTestOtpToDisplay(data.testOtp);
            setStatus('otp_verification');
            
        } catch (err) {
            console.error(err);
            setStatus('error');
            setErrorMessage(err.message);
        }
    };

    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        setStatus('verifying');
        setErrorMessage('');

        try {
            const response = await fetch('/api/reservations/verify-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    phone: formData.phone,
                    otp: otp
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to verify OTP');
            }

            // Success!
            setStatus('success');
            setFormData({
                name: '', email: '', phone: '', date: '', time: '', partySize: 2
            });
            setOtp('');
            setTestOtpToDisplay('');
            
        } catch (err) {
            console.error(err);
            setStatus('otp_verification');
            setErrorMessage(err.message);
        }
    };

    return (
        <main className="py-20 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                    <div className="md:w-1/2 p-10 flex flex-col justify-center bg-[#b0212e] text-white">
                        <h2 className="text-3xl font-serif font-bold mb-4">Book a Table</h2>
                        <p className="mb-6 opacity-90">Join us for a memorable dining experience. Reserve your table in advance.</p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <i className="fa-solid fa-clock text-xl"></i>
                                <span>Open Daily: 11 AM - 10 PM</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <i className="fa-solid fa-phone text-xl"></i>
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <i className="fa-solid fa-location-dot text-xl"></i>
                                <span>123 Flavor Street, Foodville</span>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 p-10">
                        {status === 'success' ? (
                            <div className="h-full flex flex-col items-center justify-center text-center">
                                <i className="fa-solid fa-calendar-check text-6xl text-green-500 mb-4"></i>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">Reservation Confirmed!</h3>
                                <p className="text-gray-600 mb-6">We have successfully verified your number and received your table reservation. See you soon!</p>
                                <button 
                                    onClick={() => setStatus('idle')}
                                    className="bg-[#b0212e] text-white px-6 py-2 rounded-lg font-bold hover:bg-black transition duration-300"
                                >
                                    Book Another Table
                                </button>
                            </div>
                        ) : status === 'otp_verification' || status === 'verifying' ? (
                            <form onSubmit={handleVerifyOtp} className="h-full flex flex-col justify-center space-y-6">
                                <div className="text-center">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Verify Your Number</h3>
                                    <p className="text-gray-600 mb-2">Enter the verification code sent to <strong>{formData.phone}</strong></p>
                                    
                                    {/* TESTING ONLY: SHOW OTP TO USER */}
                                    <div className="bg-yellow-100 text-yellow-800 p-3 rounded text-sm mb-4 border border-yellow-200">
                                        <strong>For Testing Purposes:</strong><br/>
                                        Your simulated SMS OTP is: <span className="text-xl font-bold tracking-widest">{testOtpToDisplay}</span>
                                    </div>
                                </div>
                                
                                {errorMessage && (
                                    <div className="bg-red-50 text-red-500 p-3 rounded text-sm mb-4">
                                        {errorMessage}
                                    </div>
                                )}
                                
                                <div>
                                    <input 
                                        type="text" 
                                        required
                                        maxLength="6"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                        className="w-full px-4 py-3 text-center text-2xl tracking-widest border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b0212e]" 
                                        placeholder="••••••" 
                                    />
                                </div>
                                
                                <div className="flex flex-col gap-3">
                                    <button 
                                        type="submit" 
                                        disabled={status === 'verifying' || otp.length < 4}
                                        className="w-full bg-[#b0212e] text-white py-3 rounded-lg font-bold hover:bg-black transition duration-300 disabled:opacity-50"
                                    >
                                        {status === 'verifying' ? 'Verifying...' : 'Confirm OTP'}
                                    </button>
                                    <button 
                                        type="button"
                                        onClick={() => setStatus('idle')}
                                        className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg font-bold hover:bg-gray-300 transition duration-300"
                                    >
                                        Back to Edit Details
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <form onSubmit={handleRequestOtp} className="space-y-6">
                                {status === 'error' && (
                                    <div className="bg-red-50 text-red-500 p-3 rounded text-sm mb-4">
                                        {errorMessage}
                                    </div>
                                )}
                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                                    <input 
                                        type="text" 
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b0212e]" 
                                        placeholder="Your Name" 
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                                        <input 
                                            type="email" 
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b0212e]" 
                                            placeholder="Email Address" 
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 text-sm font-bold mb-2">Phone</label>
                                        <input 
                                            type="tel" 
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b0212e]" 
                                            placeholder="Phone Number" 
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-gray-700 text-sm font-bold mb-2">Date</label>
                                        <input 
                                            type="date" 
                                            name="date"
                                            required
                                            value={formData.date}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b0212e]" 
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 text-sm font-bold mb-2">Time</label>
                                        <input 
                                            type="time" 
                                            name="time"
                                            required
                                            value={formData.time}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b0212e]" 
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Party Size</label>
                                    <select 
                                        name="partySize"
                                        value={formData.partySize}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b0212e]"
                                    >
                                        <option value={1}>1 Person</option>
                                        <option value={2}>2 People</option>
                                        <option value={3}>3 People</option>
                                        <option value={4}>4 People</option>
                                        <option value={5}>5 People</option>
                                        <option value={6}>6+ People</option>
                                    </select>
                                </div>
                                <button 
                                    type="submit" 
                                    disabled={status === 'loading_otp'}
                                    className="w-full bg-[#b0212e] text-white py-3 rounded-lg font-bold hover:bg-black transition duration-300 disabled:opacity-50"
                                >
                                    {status === 'loading_otp' ? 'Requesting OTP...' : 'Continue to Verification'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Reservations;
