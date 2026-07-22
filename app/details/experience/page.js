import React from 'react';
import Experience from '../../../components/Experience';
import BackButton from '../../../components/BackButton';

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <BackButton />
      <Experience />
    </div>
  );
}
