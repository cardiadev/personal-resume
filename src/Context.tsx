"use client";

import { createContext, useCallback, useReducer, useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";

// Types
export interface MenuItem {
  id: number;
  name: string;
  href: string;
}

export interface ServiceModalData {
  id: number;
  name: string;
  text: string[];
  image: string;
}

export interface NewsModalData {
  id: number;
  title: string;
  image: string;
  author: string;
  date: string;
}

export interface PortfolioShareItem {
  id: number;
  iconName: string;
  link: string;
}

export interface PortfolioDetailsModalData {
  id: number;
  thumbnail: string;
  title: string;
  text: string[];
  client: string;
  date: string;
  category: string;
  share: PortfolioShareItem[];
  bigImage: string;
  images: string[];
}

export interface TokyoContextType {
  menus: MenuItem[];
  nav: string;
  navChange: (value: string) => void;
  animation: string;
  animationChnage: (value: string) => void;
  modal: boolean;
  modalToggle: (value: boolean) => void;
  serviceModal: ServiceModalData | null;
  setServiceModal: (value: ServiceModalData | null) => void;
  newsModal: NewsModalData | null;
  setNewsModal: (value: NewsModalData | null) => void;
  portfolioDetailsModal: PortfolioDetailsModalData | null;
  setPortfolioDetailsModal: (value: PortfolioDetailsModalData | null) => void;
}

interface State {
  nav: string;
  animation: string;
  modal: boolean;
  serviceModal: ServiceModalData | null;
  newsModal: NewsModalData | null;
  portfolioDetailsModal: PortfolioDetailsModalData | null;
  menus: MenuItem[];
}

type Action =
  | { type: "NAV"; payload: string }
  | { type: "ANIMATION"; payload: string }
  | { type: "MODAL"; payload: boolean }
  | { type: "SERVICEMODAL"; payload: ServiceModalData | null }
  | { type: "NEWSMODAL"; payload: NewsModalData | null }
  | { type: "PORTFOLIODETAILSMODAL"; payload: PortfolioDetailsModalData | null };

// Create Context
const TokyoContext = createContext<TokyoContextType>({} as TokyoContextType);

// Action types
const NAV = "NAV" as const;
const ANIMATION = "ANIMATION" as const;
const MODAL = "MODAL" as const;
const SERVICEMODAL = "SERVICEMODAL" as const;
const NEWSMODAL = "NEWSMODAL" as const;
const PORTFOLIODETAILSMODAL = "PORTFOLIODETAILSMODAL" as const;

// Initial Value
const initialState: State = {
  nav: "home",
  animation: "fadeInLeft",
  modal: false,
  serviceModal: null,
  newsModal: null,
  portfolioDetailsModal: null,
  menus: [
    { id: 1, name: "Home", href: "home" },
    { id: 2, name: "About", href: "about" },
    { id: 3, name: "Services", href: "service" },
    { id: 4, name: "Portfolio", href: "portfolio" },
    { id: 5, name: "Blog", href: "news" },
    { id: 6, name: "Contact", href: "contact" },
  ],
};

// Reducer
const reducer = (state: State, action: Action): State => {
  const { type, payload } = action;
  switch (type) {
    case NAV:
      return { ...state, nav: payload };
    case ANIMATION:
      return { ...state, animation: payload };
    case MODAL:
      return { ...state, modal: payload };
    case SERVICEMODAL:
      return { ...state, serviceModal: payload };
    case NEWSMODAL:
      return { ...state, newsModal: payload };
    case PORTFOLIODETAILSMODAL:
      return { ...state, portfolioDetailsModal: payload };
    default:
      return state;
  }
};

// State Provider
const TokyoState = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const pathname = usePathname();

  // Sync navigation state with current route
  useEffect(() => {
    let currentNav = "home";

    if (pathname === "/about") currentNav = "about";
    else if (pathname === "/service") currentNav = "service";
    else if (pathname === "/portfolio") currentNav = "portfolio";
    else if (pathname === "/news") currentNav = "news";
    else if (pathname === "/contact") currentNav = "contact";

    dispatch({
      type: NAV,
      payload: currentNav,
    });
  }, [pathname]);

  const navChange = useCallback((value: string) => {
    dispatch({ type: NAV, payload: value });
  }, []);

  const animationChnage = useCallback((value: string) => {
    dispatch({ type: ANIMATION, payload: value });
  }, []);

  const modalToggle = useCallback((value: boolean) => {
    dispatch({ type: MODAL, payload: value });
  }, []);

  const setServiceModal = useCallback((value: ServiceModalData | null) => {
    dispatch({ type: SERVICEMODAL, payload: value });
  }, []);

  const setNewsModal = useCallback((value: NewsModalData | null) => {
    dispatch({ type: NEWSMODAL, payload: value });
  }, []);

  const setPortfolioDetailsModal = useCallback(
    (value: PortfolioDetailsModalData | null) => {
      dispatch({ type: PORTFOLIODETAILSMODAL, payload: value });
    },
    []
  );

  const {
    nav,
    animation,
    modal,
    serviceModal,
    newsModal,
    portfolioDetailsModal,
    menus,
  } = state;

  return (
    <TokyoContext.Provider
      value={{
        menus,
        nav,
        navChange,
        animation,
        animationChnage,
        modal,
        modalToggle,
        serviceModal,
        setServiceModal,
        newsModal,
        setNewsModal,
        portfolioDetailsModal,
        setPortfolioDetailsModal,
      }}
    >
      {children}
    </TokyoContext.Provider>
  );
};

export default TokyoState;
export { TokyoContext };
