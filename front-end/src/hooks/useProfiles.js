import { useEffect, useMemo, useState } from 'react'
import { DEFAULT_PROFILE_ICON, profileIcons } from '../data/profileIcons.js'

const PROFILES_KEY = 'iespflix_profiles'
const ACTIVE_PROFILE_KEY = 'iespflix_active_profile'

const defaultProfiles = [
  { id: 'harlen', name: 'Harlen', avatar: profileIcons[3]?.[2] || DEFAULT_PROFILE_ICON, color: 'blue' },
  { id: 'infantil', name: 'Infantil', avatar: profileIcons[1]?.[2] || DEFAULT_PROFILE_ICON, color: 'red' },
]

function readProfiles() {
  try {
    const profiles = JSON.parse(localStorage.getItem(PROFILES_KEY) || '[]')
    return profiles.length ? profiles : defaultProfiles
  } catch {
    return defaultProfiles
  }
}

export function useProfiles(user) {
  const [profiles, setProfiles] = useState(readProfiles)
  const [activeProfileId, setActiveProfileId] = useState(() => localStorage.getItem(ACTIVE_PROFILE_KEY) || defaultProfiles[0].id)

  useEffect(() => {
    localStorage.setItem(PROFILES_KEY, JSON.stringify(profiles))
  }, [profiles])

  useEffect(() => {
    localStorage.setItem(ACTIVE_PROFILE_KEY, activeProfileId)
  }, [activeProfileId])

  useEffect(() => {
    if (!profiles.some((profile) => profile.id === activeProfileId)) {
      setActiveProfileId(profiles[0]?.id || defaultProfiles[0].id)
    }
  }, [activeProfileId, profiles])

  const activeProfile = useMemo(() => {
    const fallbackName = user?.nome || 'Harlen'
    return profiles.find((profile) => profile.id === activeProfileId) || { ...defaultProfiles[0], name: fallbackName }
  }, [activeProfileId, profiles, user?.nome])

  function switchProfile(id) {
    setActiveProfileId(id)
  }

  function addProfile(name) {
    const cleanName = name.trim()
    if (!cleanName) return
    const icon = profileIcons[profiles.length % profileIcons.length]?.[2] || DEFAULT_PROFILE_ICON
    const nextProfile = {
      id: `${Date.now()}`,
      name: cleanName,
      avatar: icon,
      color: 'blue',
    }
    setProfiles((current) => [...current, nextProfile])
    setActiveProfileId(nextProfile.id)
  }

  function updateProfile(id, data) {
    setProfiles((current) => current.map((profile) => {
      if (profile.id !== id) return profile
      return {
        ...profile,
        name: data.name?.trim() || profile.name,
        avatar: data.avatar || profile.avatar || DEFAULT_PROFILE_ICON,
      }
    }))
  }

  function deleteProfile(id) {
    setProfiles((current) => {
      if (current.length <= 1) return current
      return current.filter((profile) => profile.id !== id)
    })
  }

  return { profiles, activeProfile, activeProfileId, switchProfile, addProfile, updateProfile, deleteProfile }
}
