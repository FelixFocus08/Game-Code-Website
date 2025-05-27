import React from 'react';

let audioContext;
let gainNode;

const getAudioContext = () => {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    gainNode = audioContext.createGain();
    gainNode.connect(audioContext.destination);
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime); // Standardlautstärke (0.0 bis 1.0)
  }
  return { audioContext, gainNode };
};

export const playClickSound = () => {
  try {
    const { audioContext, gainNode } = getAudioContext();
    if (!audioContext) return;

    // Erzeuge einen einfachen Klick-Sound
    const oscillator = audioContext.createOscillator();
    const clickGain = audioContext.createGain();

    oscillator.type = 'triangle'; // Oder 'sine', 'square', 'sawtooth'
    oscillator.frequency.setValueAtTime(600, audioContext.currentTime); // Hohe Frequenz für Klick
    
    clickGain.gain.setValueAtTime(1, audioContext.currentTime);
    clickGain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.05); // Schnelles Ausklingen

    oscillator.connect(clickGain);
    clickGain.connect(gainNode); // Verbinde mit dem Haupt-GainNode für Lautstärkeregelung

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.05); // Sehr kurze Dauer
  } catch (error) {
    console.error("Fehler beim Abspielen des Klick-Sounds:", error);
  }
};

export const setGlobalVolume = (volume) => {
  try {
    const { audioContext, gainNode } = getAudioContext();
    if (gainNode) {
      gainNode.gain.setValueAtTime(volume, audioContext.currentTime);
    }
  } catch (error) {
    console.error("Fehler beim Einstellen der Lautstärke:", error);
  }
};
