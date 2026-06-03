import "./index.css";

/**
 * Badge – liten etikett för att visa status, kategori eller räknare.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - Innehåll som visas i etiketten (text, ikon eller siffra).
 * @param {"neutral"|"info"|"success"|"warning"|"danger"} [props.variant="neutral"] - Färgvariant som signalerar betydelse.
 * @param {"sm"|"md"|"lg"} [props.size="md"] - Storlek på etiketten.
 * @param {string} [props.className] - Extra CSS-klasser för anpassning.
 *
 * @example
 * <Badge variant="success">Aktiv</Badge>
 */
export function Badge({
  children,
  variant = "neutral",
  size = "md",
  className = "",
  ...rest
}) {
  const { onClick, onKeyDown, role, tabIndex, ...restProps } = rest;
  const interactive = typeof onClick === "function";

  return (
    <span
      className={`fc-badge fc-badge--${variant} fc-badge--${size} ${className}`}
      role={interactive ? (role ?? "button") : role}
      tabIndex={interactive ? (tabIndex ?? 0) : tabIndex}
      onClick={onClick}
      onKeyDown={(e) => {
        onKeyDown?.(e);
        if (!interactive) return;
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick(e);
        }
      }}
      {...restProps}
    >
      {children}
    </span>
  );
}
