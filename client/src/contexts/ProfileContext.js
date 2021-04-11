import { createContext, useState, useEffect, useCallback, useContext, useMemo } from "react";


const ProfileContext = createContext()

const ProfileContextProvider = ({children}) => {

  let [choice, setChoice] = useState(0)

  return (
    <ProfileContext.Provider value={{setChoice, choice}}>
      {children}
    </ProfileContext.Provider>
  )
}

export default ProfileContextProvider

const useProfileContext = () => useContext(ProfileContext)

export {
  useProfileContext,
}
