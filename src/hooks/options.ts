import { useAppSelector } from "./redux";

export const useOptions = () => {
  const IncludeUppercase = useAppSelector((state) => state.options.upperCase);
  const IncludeLowercase = useAppSelector((state) => state.options.lowerCase);
  const IncludeNumbers = useAppSelector((state) => state.options.numbers);
  const IncludeSymbols = useAppSelector((state) => state.options.symbols);
  const passLength = useAppSelector((state) => state.options.passwordLength)

  return [IncludeUppercase, IncludeLowercase, IncludeNumbers, IncludeSymbols, passLength]
};
