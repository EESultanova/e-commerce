import { createContext, useState, useContext } from "react";


const ProfileContext = createContext()

const ProfileContextProvider = ({children}) => {

  const [choice, setChoice] = useState(0)
  const [language, setLanguage] = useState('')

  return (
    <ProfileContext.Provider value={{
      setChoice,
      choice,
      language,
      setLanguage,}}>
      {children}
    </ProfileContext.Provider>
  )
}

export default ProfileContextProvider

const useProfileContext = () => useContext(ProfileContext)

export {
  useProfileContext,
}
