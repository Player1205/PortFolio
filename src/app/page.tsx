"use client";

import { lazy, Suspense } from "react";
import MainContainer from "@/components/MainContainer";

const CharacterModel = lazy(() => import("@/components/Character"));

export default function HomePage() {
  return (
    <MainContainer>
      <Suspense fallback={null}>
        <CharacterModel />
      </Suspense>
    </MainContainer>
  );
}
