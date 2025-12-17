"use client";

import { useEffect, useState } from "react";
import ProfileHeader from "./_components/ProfileHeader";
import { UserWithPosts } from "@/app/models/UserType";
import { getCurrentUserProfile } from "@/app/actions/user";

export default function ProfileSearch() {
  const [user, setUser] = useState<UserWithPosts | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProfile() {
      setLoading(true);
      const result = await getCurrentUserProfile();

      if (result.success && result.user) {
        setUser(result.user);
      } else {
        setError(result.error || "Erreur de chargement");
      }
      setLoading(false);
    }

    loadProfile();
  }, []);

  if (loading) {
    return <div className="text-center p-8">Chargement...</div>;
  }

  if (error || !user) {
    return <div className="text-center p-8 text-red-500">{error}</div>;
  }

  return (
    <div>
      <ProfileHeader user={user} />
    </div>
  );
}
