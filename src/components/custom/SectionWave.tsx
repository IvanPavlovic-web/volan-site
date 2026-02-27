import { cn } from "@/lib/utils";

type SectionWaveProps = {
  nextColor: string;
  className?: string;
  variant?: 1 | 2 | 3;
};

const paths: Record<1 | 2 | 3, string> = {
  1: "M0,224L48,208C96,192,192,160,288,149.3C384,139,480,149,576,165.3C672,181,768,203,864,202.7C960,203,1056,181,1152,160C1248,139,1344,117,1392,106.7L1440,96L1440,320L0,320Z",
  2: "M0,96L48,106.7C96,117,192,139,288,165.3C384,192,480,224,576,218.7C672,213,768,171,864,149.3C960,128,1056,128,1152,144C1248,160,1344,192,1392,208L1440,224L1440,320L0,320Z",
  3: "M0,192L48,170.7C96,149,192,107,288,101.3C384,96,480,128,576,165.3C672,203,768,245,864,245.3C960,245,1056,203,1152,165.3C1248,128,1344,96,1392,80L1440,64L1440,320L0,320Z",
};

const SectionWave = ({ nextColor, className, variant = 1 }: SectionWaveProps) => {
  return (
    <div className={cn("pointer-events-none absolute inset-x-0 -bottom-px h-20 overflow-hidden md:h-24", className)}>
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <path fill={nextColor} d={paths[variant]} />
      </svg>
      <div
        className="absolute inset-x-0 top-0 h-8"
        style={{
          background: "linear-gradient(180deg, rgba(14, 33, 45, 0.08) 0%, rgba(14, 33, 45, 0) 100%)",
        }}
      />
    </div>
  );
};

export default SectionWave;
