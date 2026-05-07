import { useState } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Invalid email").max(160),
  date: z.string().min(1, "Pick a date"),
  time: z.string().min(1, "Pick a time"),
  guests: z.coerce.number().int().min(1).max(20),
  notes: z.string().max(400).optional(),
});

export function ReservationForm() {
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const result = schema.safeParse(data);
    if (!result.success) {
      setError(result.error.issues[0]?.message ?? "Please review the form");
      setStatus("error");
      return;
    }
    setError(null);
    setStatus("ok");
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" name="name" type="text" placeholder="Your name" />
        <Field label="Email" name="email" type="email" placeholder="you@email.com" />
        <Field label="Date" name="date" type="date" />
        <Field label="Time" name="time" type="time" />
        <Field label="Guests" name="guests" type="number" defaultValue="2" min={1} max={20} />
        <Field label="Notes" name="notes" type="text" placeholder="Allergies, occasion…" />
      </div>
      <button
        type="submit"
        className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full bg-primary px-8 py-4 text-sm uppercase tracking-[0.2em] text-primary-foreground transition-all hover:shadow-glow"
      >
        <span className="relative z-10">Reserve Your Table</span>
        <span className="absolute inset-0 -translate-x-full bg-accent transition-transform duration-500 group-hover:translate-x-0" />
      </button>
      {status === "ok" && (
        <p className="text-center text-sm text-primary">
          Thank you. We'll confirm your reservation by email shortly.
        </p>
      )}
      {status === "error" && error && (
        <p className="text-center text-sm text-destructive">{error}</p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type,
  ...rest
}: { label: string; name: string; type: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
      <input
        name={name}
        type={type}
        {...rest}
        className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
      />
    </label>
  );
}
