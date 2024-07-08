export interface IPassSettings {
  useUpper: boolean,
  useLower: boolean,
  useDigits: boolean,
  useSymbols: boolean,
  length: number
}

export const generatePassword = ({ length, useLower, useUpper, useDigits, useSymbols }: IPassSettings): { password: string, strength: number } => {
  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const digits = "0123456789";
  const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

  let allChars = "";
  let password = "";

  if (useUpper) allChars += upperChars;
  if (useLower) allChars += lowerChars;
  if (useDigits) allChars += digits;
  if (useSymbols) allChars += symbols;

  if (allChars === "") return { password: "", strength: 0 };

  const getRandomChar = (chars: string) => chars[Math.floor(Math.random() * chars.length)];

  while (password.length < length) {
    password += getRandomChar(allChars);
  }

  password = password.split("").sort(() => 0.5 - Math.random()).join("");

  let strength = 0;
  if (useUpper) strength++;
  if (useLower) strength++;
  if (useDigits) strength++;
  if (useSymbols) strength++;
  if (strength === 4 && length >= 12) strength++;

  return { password, strength };
};
