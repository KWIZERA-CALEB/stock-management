import { useEffect, useState } from 'react'
import { useAuth } from '../components/contexts/authContext'

export const useFetchUser = () => {
    const { user } = useAuth();
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user) {
          fetch(`/api/user/${user._id}`)
            .then(res => res.json())
            .then(data => {
              setUserInfo(data);
              setLoading(false);
            })
            .catch(err => {
              setLoading(false);
            });
        } else {
          setLoading(false);
        }
    }, [user]);

    return { userInfo, loading };
}