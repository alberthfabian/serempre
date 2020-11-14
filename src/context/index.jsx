import React, { useMemo, useCallback, useState } from 'react';
// import React, { useEffect, useMemo, useMemo } from 'react';
import { Data } from '../components/Data'; 

const Server = React.createContext();

export function ServerProvider(props) {

  const[ text, setText ] = useState(0);
  const[ position, setPosition ] = useState(0);

  const valueImg = useCallback((id) => {
    setPosition(id);
  },[]); 

  const general = useCallback((e) => {
    setText(e);
  },[]);

  const value = useMemo(() => {
    return ({
      text,
      position,
      Data,
      valueImg,
      general
    })
  }, [text, position, valueImg, general]);

  return <Server.Provider value={value} {...props} />
}

export function useServer() {
  const context = React.useContext(Server);
  if (!context) {
    throw new Error('useServer debe estar dentro del proveedor Name')
  }
  return context;
}