'use client';

import React from 'react';
import Contact from '../../../components/Contact';
import BackButton from '../../../components/BackButton';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <BackButton />
      <Contact />
    </div>
  );
}
