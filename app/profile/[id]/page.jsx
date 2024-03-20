'use client';
import Profile from "@components/Profile";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const UserProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const username = searchParams.get('name');
  const [userPosts, setUserPosts] = useState([]);
  
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`);
      const data = await response.json();
      setUserPosts(data);
    }
    if (params?.id) fetchPosts();
  }, [params.id]);
  
  return (
    <Profile 
      name={`${username}'s`}
      desc={`Welcome to ${username}'s personalized profile page. Explore ${username}'s exceptional prompts and be inspired by the user power of their imagination`}
      data={userPosts}
    />
  )
}

export default UserProfile;