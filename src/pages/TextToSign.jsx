"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, Download, RefreshCw, Settings } from "lucide-react";
import JSZip from "jszip";
import { saveAs } from "file-saver";

export default function TextToSign() {
  const [text, setText] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const playbackRef = useRef(null);

  const letters = text.toUpperCase().replace(/[^A-Z ]/g, "").split("");

  useEffect(() => {
    return () => clearTimeout(playbackRef.current);
  }, []);

  const handleTextChange = (e) => {
    setText(e.target.value);
    stopPlayback();
  };

  const startPlayback = () => {
    if (!letters.length) return;
    setIsPlaying(true);
    playNext(0);
  };

  const playNext = (index) => {
    if (index >= letters.length || !isPlaying) {
      setIsPlaying(false);
      setCurrentIndex(-1);
      return;
    }
    setCurrentIndex(index);
    playbackRef.current = setTimeout(() => {
      playNext(index + 1);
    }, 500 / playbackSpeed);
  };

  const stopPlayback = () => {
    setIsPlaying(false);
    clearTimeout(playbackRef.current);
    setCurrentIndex(-1);
  };

  const handleSpeedChange = (e) => {
    const speed = parseFloat(e.target.value);
    setPlaybackSpeed(speed);
    if (isPlaying) {
      stopPlayback();
      setTimeout(() => startPlayback(), 0);
    }
  };

  const reset = () => {
    setText("");
    stopPlayback();
  };

  const downloadSequence = async () => {
    if (!letters.length) return;
    const zip = new JSZip();
    const imagePromises = letters.map(async (char, index) => {
      if (char === " ") return;
      const response = await fetch(`/sign-text-photo/${char}.jpg`);
      const blob = await response.blob();
      zip.file(`${index + 1}_${char}.jpg`, blob);
    });
    await Promise.all(imagePromises);
    const content = await zip.generateAsync({ type: "blob" });
    saveAs(content, "sign_language_sequence.zip");
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center text-primary mb-8">
          Text to Indian Sign Language
        </h1>

        {/* Text Input */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow mb-8">
          <textarea
            value={text}
            onChange={handleTextChange}
            placeholder="Type your sentence here..."
            className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-[120px] focus:ring-2 focus:ring-blue-500"
          />
          <div className="mt-4 flex flex-wrap gap-4">
            <button
              onClick={isPlaying ? stopPlayback : startPlayback}
              disabled={!text.trim()}
              className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {isPlaying ? "Pause" : "Play"}
            </button>

            <button
              onClick={reset}
              className="flex items-center gap-2 px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600"
            >
              <RefreshCw className="w-4 h-4" /> Reset
            </button>

            <button
              onClick={downloadSequence}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              <Download className="w-4 h-4" /> Download
            </button>

            <div className="flex items-center gap-2 ml-auto">
              <Settings className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-700 dark:text-gray-300">Speed:</span>
              <input
                type="range"
                min="0.5"
                max="2"
                step="0.1"
                value={playbackSpeed}
                onChange={handleSpeedChange}
                className="w-24"
              />
              <span className="text-sm font-medium">{playbackSpeed}x</span>
            </div>
          </div>
        </div>

        {/* Display Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow">
          <h2 className="text-2xl font-semibold mb-6">Sign Language Translation</h2>

          {letters.length > 0 ? (
            <div className="flex flex-wrap gap-4 justify-center">
              {letters.map((char, index) => {
                if (char === " ") {
                  return (
                    <div key={index} className="w-8" /> // Space between words
                  );
                }
                return (
                  <div
                    key={index}
                    className={`flex flex-col items-center p-2 rounded-lg border ${
                      index === currentIndex
                        ? "border-blue-500 bg-blue-100 dark:bg-blue-900"
                        : "border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700"
                    } transition duration-300`}
                  >
                    <img
                      src={`/sign-text-photo/${char}.jpg`}
                      alt={char}
                      className="h-24 w-24 object-contain"
                    />
                    <p className="mt-2 text-sm font-medium text-gray-800 dark:text-gray-200">{char}</p>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-400">Enter text to see sign images</p>
          )}
        </div>

        {/* About Section */}
        <div className="mt-12 bg-blue-50 dark:bg-blue-900 rounded-xl p-6 shadow">
          <h2 className="text-2xl font-semibold mb-4">About This Feature</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            This tool converts your text into Indian Sign Language (ISL) by showing the respective signs for each letter.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Adjust speed, play the sequence, or download the signs. Spaces between words are visually represented.
          </p>
        </div>
      </div>
    </div>
  );
}
