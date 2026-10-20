export default function LoadingSpinner() {
  return (
    // The backdrop overlay darkens the background slightly and blurs it for a high-end spa aesthetic
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#f8f4f0]/70 backdrop-blur-sm">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="relative flex items-center justify-center">
          <div className="absolute h-20 w-20 rounded-full bg-[#7B4F2E]/20 animate-ping" />
          <div className="absolute h-16 w-16 rounded-full bg-[#7B4F2E]/20 animate-ping [animation-delay:200ms]" />

          <div className="relative flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#7B4F2E]/30 bg-white shadow-[0_0_20px_rgba(123,79,46,0.15)]">
            <span className="text-2xl font-black tracking-[-0.08em] text-[#7B4F2E] animate-pulse">
              IS
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm font-semibold tracking-[0.3em] text-[#3a2e27] uppercase">
          <span className="inline-block h-2 w-2 animate-bounce rounded-full bg-[#7B4F2E] [animation-delay:0ms]" />
          <span className="inline-block h-2 w-2 animate-bounce rounded-full bg-[#7B4F2E] [animation-delay:120ms]" />
          <span className="inline-block h-2 w-2 animate-bounce rounded-full bg-[#7B4F2E] [animation-delay:240ms]" />
        </div>
      </div>
    </div>
  );
}
