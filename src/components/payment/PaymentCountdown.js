import React, { useContext } from 'react';
import { CountdownContext } from './CountdownContext';
import { styles } from '@/styles/styles';

const PaymentCountdown = () => {
    return (
        <div className={`${styles.mainCol} py-5 shadow-md px-5`}>
            <div className={`${styles.deadline} font-sans font-bold flex p-0 mt-10 mb-2 mx-5`}>
                <p>Isi Data Diri</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                <p className="text-gray-400">Bayar</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                <p className="text-gray-400">Selesai</p>
            </div>
            <div className={`${styles.deadline} flex justify-center items-center w-full p-5 mx-10 rounded-lg bg-red-500 text-white`}>
                <p className="font-sans flex gap-1">Selesaikan Dalam 15 Menit</p>
            </div>
        </div>
    );
};

export default PaymentCountdown;
