import React from "react";
import { Link, useRouteError } from "react-router-dom";
import { ArrowLeft, Home, AlertTriangle } from "lucide-react";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="min-h-screen bg-[#F0F1F3] flex flex-col items-center justify-center p-4 text-slate-900" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#46C7CD]/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#00B4D8]/10 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-md w-full bg-white rounded-[32px] p-8 sm:p-12 shadow-2xl shadow-slate-200/60 transition-all duration-500">
                <div className="w-20 h-20 bg-red-50 rounded-2xl flex items-center justify-center mb-8 mx-auto">
                    <AlertTriangle className="w-10 h-10 text-red-500" />
                </div>

                <h1 className="text-4xl sm:text-5xl font-black text-slate-900 text-center mb-4 tracking-tight">
                    Oops!
                </h1>

                <p className="text-slate-500 text-center text-lg mb-10 leading-relaxed font-medium">
                    Something went wrong or this page doesn't exist. Let's get you back on track.
                </p>

                <div className="flex flex-col gap-3">
                    <Link
                        to="/"
                        className="flex items-center justify-center gap-2 w-full py-3.5 bg-gradient-to-r from-[#46C7CD] to-[#00B4D8] text-white font-bold rounded-2xl shadow-lg shadow-[#46C7CD]/20 hover:shadow-xl hover:shadow-[#46C7CD]/30 transition-all active:scale-[0.98]"
                    >
                        <Home className="w-5 h-5" />
                        Back to Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="flex items-center justify-center gap-2 w-full py-3.5 bg-slate-50 text-slate-600 font-bold rounded-2xl hover:bg-slate-100 transition-all active:scale-[0.98]"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Go Back
                    </button>
                </div>

                {error && (
                    <div className="mt-8 p-4 bg-red-50 rounded-xl text-[10px] text-red-800 font-mono overflow-auto max-h-32 border border-red-100">
                        {error.statusText || error.message}
                    </div>
                )}
            </div>

            <div className="mt-12 text-slate-400 text-[10px] font-bold tracking-[0.2em] uppercase italic">
                Match At First Swipe
            </div>
        </div>
    );
}
