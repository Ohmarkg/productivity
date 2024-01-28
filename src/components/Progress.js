'use client'
import React from 'react';

function Progress() {
  const radius =100;
  const stroke = 10;
  const progress = 70; // your progress percentage

  // Circumference for the progress stroke
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  // How much of the circumference should be offset
  const strokeDashoffset = circumference - progress / 100 * circumference;

  return (
    <svg
      height={radius * 2}
      width={radius *2}
    >
      <circle
        stroke="blue"
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={circumference + ' ' + circumference}
        style={{ strokeDashoffset }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <text
        x={radius}
        y={radius}
        textAnchor="middle"
        fill="white"
        strokeWidth="2px"
        fontSize="20px"
        domain-baseline="middle"
      >
        {progress}%
      </text>
    </svg>
  );
}

export default Progress;