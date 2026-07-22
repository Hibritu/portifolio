import React from 'react';
import WhatIDo from '../../../components/WhatIDo';
import BackButton from '../../../components/BackButton';

export default function WhatIDoPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <BackButton />
      <WhatIDo />
    </div>
  );
}