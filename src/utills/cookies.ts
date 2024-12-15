export const setCookie = (name: string, value: any, days: number) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    window.document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`;
};

export const getCookie = (name: string): any | null => {
    const cookieArr = window.document.cookie.split(';');
    for (let i = 0; i < cookieArr.length; i++) {
        let cookie = cookieArr[i].trim();
        if (cookie.startsWith(`${name}=`)) {
            const cookieValue = cookie.substring(name.length + 1);
            return cookieValue;
        }
    }
    return null;
};

export const removeCookie = (name: string) => {
    window.document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};

export const removeAllCookies = () => {
    const cookies = window.document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookieName = cookies[i].split('=')[0].trim();
        removeCookie(cookieName);
    }
};


// Example
// 'use client';

// import { useEffect, useState } from 'react';
// import { getCookie, removeCookie, setCookie } from 'src/utills/cookies';

// export default function FormPage() {
//   const [cookieUser, setCookieUser] = useState({ name: '', id: 0 });
//   const [getNewCookie, setGetNewCookie] = useState(false);

//   useEffect(() => {
//     const user = getCookie('username');
//     setCookieUser(JSON.parse(user));
//   }, [getNewCookie]);

//   useEffect(() => {
//     setTimeout(() => {
//       setGetNewCookie(false);
//     }, 1000);
//   }, [getNewCookie]);

//   const handleSetCookie = () => {
//     setCookie('username', JSON.stringify({ name: 'John Doe', id: Math.round(Math.random() * 100) }), 1);
//     setGetNewCookie(true);
//   };

//   const handleRemoveCookie = () => {
//     removeCookie('username');
//     setGetNewCookie(true);
//   };

//   return (
//     <>
//       <p>
//         <span className="font-bold">Hello, </span>
//         {cookieUser ? cookieUser.name : 'Guest'}, id: {cookieUser ? cookieUser.id : 'N/A'}
//       </p>
//       <div className="flex gap-4">
//         <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600" onClick={handleSetCookie}>Set Cookie</button>
//         <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600" onClick={handleRemoveCookie}>Remove Cookie</button>
//       </div>
//     </>
//   );
// }