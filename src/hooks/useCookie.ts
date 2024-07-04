import { useState, useEffect } from "react";

type CookieOptions = {
  path?: string;
  expires?: number | Date;
  domain?: string;
  secure?: boolean;
  sameSite?: "strict" | "lax" | "none";
};

type CookieSetter = (
  name: string,
  value: string,
  options?: CookieOptions
) => void;
type CookieRemover = (name: string) => void;

// type UseCookie = [string | undefined, CookieSetter, CookieRemover];

const useCookie = (cookieName: string, initialValue = "") => {
  const [cookieValue] = useState<string | undefined>(() => {
    const cookieValue = getCookie(cookieName);
    return cookieValue || initialValue;
  });

  useEffect(() => {
    if (cookieValue) {
      setCookie(cookieName, cookieValue);
    }
  }, [cookieName, cookieValue]);

  const setCookie: CookieSetter = (name, value, options = {}) => {
    let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(
      value
    )}`;

    if (options.expires) {
      if (typeof options.expires === "number") {
        const date = new Date();
        date.setTime(date.getTime() + options.expires * 24 * 60 * 60 * 1000);
        options.expires = date;
      }
      cookieString += `; expires=${options.expires.toUTCString()}`;
    }

    if (options.path) {
      cookieString += `; path=${options.path}`;
    }

    if (options.domain) {
      cookieString += `; domain=${options.domain}`;
    }

    if (options.secure) {
      cookieString += "; secure";
    }

    if (options.sameSite) {
      cookieString += `; sameSite=${options.sameSite}`;
    }

    document.cookie = cookieString;
  };

  const removeCookie: CookieRemover = (name) => {
    setCookie(name, "", { expires: new Date(0) });
  };

  return { cookieValue, setCookie, removeCookie };
};

export const getCookie = (name: string): string | undefined => {
  const cookieValue = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
  return cookieValue ? decodeURIComponent(cookieValue.pop()!) : undefined;
};

export const setCookie: CookieSetter = (name, value, options = {}) => {
  let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

  if (options.expires) {
    if (typeof options.expires === "number") {
      const date = new Date();
      date.setTime(date.getTime() + options.expires * 24 * 60 * 60 * 1000);
      options.expires = date;
    }
    cookieString += `; expires=${options.expires.toUTCString()}`;
  }

  if (options.path) {
    cookieString += `; path=${options.path}`;
  }

  if (options.domain) {
    cookieString += `; domain=${options.domain}`;
  }

  if (options.secure) {
    cookieString += "; secure";
  }

  if (options.sameSite) {
    cookieString += `; sameSite=${options.sameSite}`;
  }

  document.cookie = cookieString;
};

export default useCookie;
