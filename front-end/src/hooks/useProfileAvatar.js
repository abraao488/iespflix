import { useEffect, useState } from 'react'
import { DEFAULT_PROFILE_ICON } from '../data/profileIcons.js'

const AVATAR_KEY = 'iespflix_profile_avatar'

export function useProfileAvatar() {
  const [avatarUrl, setAvatarUrlState] = useState(() => localStorage.getItem(AVATAR_KEY) || DEFAULT_PROFILE_ICON)

  useEffect(() => {
    localStorage.setItem(AVATAR_KEY, avatarUrl || DEFAULT_PROFILE_ICON)
  }, [avatarUrl])

  function setAvatarUrl(nextUrl) {
    setAvatarUrlState(nextUrl?.trim() || DEFAULT_PROFILE_ICON)
  }

  function resetAvatar() {
    setAvatarUrlState(DEFAULT_PROFILE_ICON)
  }

  return { avatarUrl, setAvatarUrl, resetAvatar }
}
