import React from 'react';
import Education from '../../../components/Education';
import BackButton from '../../../components/BackButton';

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <BackButton />
      <Education />
    </div>
  );
}
