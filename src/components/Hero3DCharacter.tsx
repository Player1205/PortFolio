"use client";

import React from "react";
import CharacterModel from "./Character";

export interface Hero3DCharacterProps {
  className?: string;
  onCoreClick?: () => void;
}

export function Hero3DCharacter({ className = "" }: Hero3DCharacterProps) {
  return (
    <div className={className}>
      <CharacterModel />
    </div>
  );
}

export default Hero3DCharacter;
