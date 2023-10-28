"use client"
import { useState, useEffect } from 'react';

export function Logo() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true)
    }, 50);
  }, [])
  const visibleClasses = visible ? 'scale-x-100' : '';
  return <span className={`self-center justify-self-center flex items-center mx-4 font-serif text-6xl font-extrabold text-black dark:text-slate-50`}>Z<span className={`mx-2 text-3xl transition-transform duration-700 delay-300 origin-left scale-x-0 ${visibleClasses}`}>achary Tarvid-Richey</span></span>
}
