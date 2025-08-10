import { useCallback, type MouseEventHandler } from "react";

export function useTTS(text: string) {
  const speak = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => {
      event.stopPropagation();
      window.speechSynthesis.cancel();

      const speakWithVoice = () => {
        const utterance = new SpeechSynthesisUtterance(text);
        const voices = window.speechSynthesis.getVoices();

        // Prioritize default English voice, fallback to first English voice
        const defaultEnglishVoice = voices.find(
          (v) => v.default && v.lang.startsWith("en")
        );
        const englishVoice =
          defaultEnglishVoice || voices.find((v) => v.lang.startsWith("en"));

        if (englishVoice) {
          utterance.voice = englishVoice;
        }

        window.speechSynthesis.speak(utterance);
      };

      // Handle voice loading if needed
      if (window.speechSynthesis.getVoices().length === 0) {
        window.speechSynthesis.onvoiceschanged = speakWithVoice;
      } else {
        speakWithVoice();
      }
    },
    [text]
  );

  return { speak };
}
