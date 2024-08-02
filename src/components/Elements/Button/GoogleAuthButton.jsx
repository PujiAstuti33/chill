import React from 'react';

const GoogleAuthButton = ({ children }) => {
    const handleGoogleSignIn = () => {
        // Tambahkan logika untuk menghubungkan dengan Google Auth di sini
        console.log('Sign in with Google');
    };

    return (
        <button 
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center w-full py-2 px-4 bg-slate-600 text-white font-semibold rounded-lg hover:bg-slate-600"
        >
            <img 
                src="/images/google-icon.png"  // Use the path relative to the public folder
                alt="Google Icon" 
                className="w-5 h-5 mr-2" // Adjust size and margin as needed
            />
            {children}
        </button>
    );
};

export default GoogleAuthButton;
