'use client';
import React, { useState } from 'react';
import { IntroAnimation } from '@/components/intro';
import Bio from './biography/bio';
import Courses from './biography/courses';
import Technologies from './biography/technologies';
import Experience from './biography/experience';
import RelevantProjects from './biography/relevantProjects';

export default function About() {
  const [showIntro, setShowIntro] = useState(true);
  return (
    <>
      {showIntro ? (
        <IntroAnimation onComplete={() => setShowIntro(false)} />
      ) : (
        <div
          id="about"
          className="flex min-h-screen w-full flex-col items-center justify-center py-5"
        >
          <Bio />
          <Courses />
          <Technologies />
          <Experience />
          <RelevantProjects />
        </div>
      )}
    </>
  );
}
