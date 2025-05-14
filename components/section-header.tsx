interface SectionHeaderProps {
  title: string
  variant?: "light" | "dark"
}

export default function SectionHeader({ title, variant = "light" }: SectionHeaderProps) {
  return (
    <div className={`mb-8 ${variant === "dark" ? "text-white" : "text-black"}`}>
      <h2 className="text-3xl font-bold uppercase">{title}</h2>
      <div className="accent-line w-24 mt-2"></div>
    </div>
  )
}
