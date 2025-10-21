"use client"
import React, { useState } from 'react';
import Filter from '@/components/Filter';

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div id="Hero">
          <h1 className="text-5xl font-medium text-center sm:text-left">
            Abhi Jariwala
          </h1>
          <p>
            I’m Abhi Jariwala. Obsessed with going from 0 → 1. <br></br>
            <br></br>Professionally, this makes me some combination of a
            full-stack developer, design engineer, product manager.
            <br></br>
            <br></br>
            Almost as much as creating things, I enjoy the process of mastery -
            taking a skill and sharpening it until it’s second nature. I’ve
            found project building to be the best way to do that.
            <br></br>
            <br></br>
            Below, you can <span className="font-bold">checkoutmyprojects</span>
            (.com). I also do freelance work @ ibuildyourideas.com.
            <br></br>
            <br></br>
            The best way to get in touch with me is a cold DM on X
            @_abhijariwala.
          </p>
        </div>

        <div id="Projects">
          <h2 className="text-4xl font-medium text-center sm:text-left">
            Projects
          </h2>
          <div id="Filter">
            <Filter />
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
