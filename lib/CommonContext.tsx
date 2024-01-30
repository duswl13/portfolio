import { ReactNode, createContext, useContext, useState } from "react";

// 테마
type Theme = "dark" | "light";

interface commonContext {
  theme: Theme;
  setTheme: (value: Theme) => void;
}

const CommonContext = createContext<commonContext>({
  theme: "dark",
  setTheme: () => {},
});

export function CommonContextProvider({ children }: { children: ReactNode }) {
  // TODO : 추후 로컬스토리지로 변경
  const [theme, setTheme] = useState<Theme>("dark");

  return (
    <CommonContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </CommonContext.Provider>
  );
}

function useTheme() {
  const { theme } = useContext(CommonContext);
  return theme;
}

export function useSetTheme() {
  const { setTheme } = useContext(CommonContext);
  return setTheme;
}
