const TYPES = ["button", "submit", "reset"];
export const Button = (
  { text, type, onClick, variant, size, disabled },
  props
) => {
  const checkType = TYPES.includes(type) ? type : TYPES[0];
  const checkSize = size ? `btn-${size}` : "";
  const checkVariant = variant ? `btn-${variant}` : "";

  return (
    <button
      type={checkType}
      onClick={onClick}
      disabled={disabled}
      className={`${checkVariant} ${checkSize} btn`}
    >
      {text}
    </button>
  );
};
