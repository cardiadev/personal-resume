import { createContext, useCallback, useReducer, useEffect } from "react";
import { useRouter } from "next/router";

// Create Context
const TokyoContext = createContext();

// Type
const type = {
  NAV: "NAV",
  ANIMATION: "ANIMATION",
  MODAL: "MODAL",
  SERVICEMODAL: "SERVICEMODAL",
  NEWSMODAL: "NEWSMODAL",
  PORTFOLIODETAILSMODAL: "PORTFOLIODETAILSMODAL",
};
const {
  NAV,
  ANIMATION,
  MODAL,
  SERVICEMODAL,
  NEWSMODAL,
  PORTFOLIODETAILSMODAL,
} = type;

// Initial Value
const initialState = {
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
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case NAV:
      return {
        ...state,
        nav: payload,
      };
    case ANIMATION:
      return {
        ...state,
        animation: payload,
      };
    case MODAL:
      return {
        ...state,
        modal: payload,
      };
    case SERVICEMODAL:
      return {
        ...state,
        serviceModal: payload,
      };
    case NEWSMODAL:
      return {
        ...state,
        newsModal: payload,
      };
    case PORTFOLIODETAILSMODAL:
      return {
        ...state,
        portfolioDetailsModal: payload,
      };
    default:
      return state;
  }
};

// Watson State
const TokyoState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const router = useRouter();

  // Sync navigation state with current route
  useEffect(() => {
    const path = router.pathname;
    let currentNav = 'home';
    
    if (path === '/about') currentNav = 'about';
    else if (path === '/service') currentNav = 'service';
    else if (path === '/portfolio') currentNav = 'portfolio';
    else if (path === '/news') currentNav = 'news';
    else if (path === '/contact') currentNav = 'contact';
    
    dispatch({
      type: NAV,
      payload: currentNav,
    });
  }, [router.pathname]);

  const navChange = useCallback((value) => {
    dispatch({
      type: NAV,
      payload: value,
    });
  }, []);

  const animationChnage = useCallback((value) => {
    dispatch({
      type: ANIMATION,
      payload: value,
    });
  }, []);

  const modalToggle = useCallback((value) => {
    dispatch({
      type: MODAL,
      payload: value,
    });
  }, []);

  const setServiceModal = useCallback((value) => {
    dispatch({
      type: SERVICEMODAL,
      payload: value,
    });
  }, []);
  const setNewsModal = useCallback((value) => {
    dispatch({
      type: NEWSMODAL,
      payload: value,
    });
  }, []);
  const setPortfolioDetailsModal = useCallback((value) => {
    dispatch({
      type: PORTFOLIODETAILSMODAL,
      payload: value,
    });
  }, []);

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
