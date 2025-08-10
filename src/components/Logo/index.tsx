export function Logo() {
  return (
    <h1 className="bg-gradient-to-r from-[var(--primary-color)] lg:ml-[300px] to-red-800 bg-clip-text text-transparent text-3xl font-bold [text-shadow:3px_3px_0px_rgba(0,0,0,0.1),6px_6px_0px_rgba(0,0,0,0.05)] w-fit lg:text-5xl lg:hover:bg-gradient-to-r lg:hover:from-red-800 lg:hover:to-[var(--primary-color)]">
      WordHorizon
    </h1>
  );
}

Logo.displayName = "Logo";
