import { useState, useEffect } from "react";

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState({
    user: false,
    posts: false,
  });
  const [error, setError] = useState({
    user: null,
    posts: null,
  });

  // Fetch user data when userId changes
  useEffect(() => {
    if (!userId) {
      setUser(null);
      return;
    }

    const abortController = new AbortController();

    const fetchUser = async () => {
      setLoading((prev) => ({ ...prev, user: true }));
      setError((prev) => ({ ...prev, user: null }));

      try {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const response = await fetch(`/api/users/${userId}`, {
          signal: abortController.signal,
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const userData = await response.json();
        setUser(userData);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError((prev) => ({ ...prev, user: err.message }));
        }
      } finally {
        setLoading((prev) => ({ ...prev, user: false }));
      }
    };

    fetchUser();

    return () => {
      abortController.abort();
    };
  }, [userId]);

  // Fetch user posts when user changes
  useEffect(() => {
    if (!user) {
      setPosts([]);
      return;
    }

    const abortController = new AbortController();

    const fetchPosts = async () => {
      setLoading((prev) => ({ ...prev, posts: true }));
      setError((prev) => ({ ...prev, posts: null }));

      try {
        await new Promise((resolve) => setTimeout(resolve, 800));

        const response = await fetch(`/api/users/${user.id}/posts`, {
          signal: abortController.signal,
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch posts: ${response.status}`);
        }

        const postsData = await response.json();
        setPosts(postsData);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError((prev) => ({ ...prev, posts: err.message }));
        }
      } finally {
        setLoading((prev) => ({ ...prev, posts: false }));
      }
    };

    fetchPosts();

    return () => {
      abortController.abort();
    };
  }, [user]);

  useEffect(() => {
    if (user) {
      document.title = `Profile: ${user.name}`;
    } else {
      document.title = "User Profile";
    }

    return () => {
      document.title = "React App";
    };
  }, [user]);

  // Simulate real API responses
  useEffect(() => {
    // Mock API setup
    const mockUsers = {
      1: {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        avatar:
          "https://www.freepik.com/free-psd/3d-illustration-person-with-sunglasses_27470334.htm#fromView=keyword&page=1&position=3&uuid=bbbd6767-14eb-4183-a1a5-5aa406e6084d&query=Avatar",
      },
      2: {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        avatar:
          "https://www.freepik.com/free-psd/3d-illustration-person-with-sunglasses_27470334.htm#fromView=keyword&page=1&position=3&uuid=bbbd6767-14eb-4183-a1a5-5aa406e6084d&query=Avatar",
      },
    };

    const mockPosts = {
      1: [
        {
          id: 1,
          title: "My First Post",
          content: "Hello world!",
          date: "2024-01-15",
        },
        {
          id: 2,
          title: "React Tips",
          content: "useEffect is powerful!",
          date: "2024-01-16",
        },
      ],
      2: [
        {
          id: 3,
          title: "JavaScript Tricks",
          content: "Async/await is great",
          date: "2024-01-17",
        },
      ],
    };

    // Override fetch for demo
    const originalFetch = window.fetch;
    window.fetch = async (url, options) => {
      if (options?.signal?.aborted) {
        throw new Error("AbortError");
      }

      if (url.includes("/api/users/") && !url.includes("/posts")) {
        const userId = parseInt(url.split("/").pop());
        const user = mockUsers[userId];

        if (user) {
          return {
            ok: true,
            json: async () => user,
          };
        } else {
          return { ok: false, status: 404 };
        }
      }

      if (url.includes("/posts")) {
        const userId = parseInt(url.split("/")[3]);
        const posts = mockPosts[userId] || [];

        return {
          ok: true,
          json: async () => posts,
        };
      }

      return originalFetch(url, options);
    };

    return () => {
      window.fetch = originalFetch;
    };
  }, []);

  if (!userId) {
    return (
      <div>
        <p>Please select a user to view their profile</p>
      </div>
    );
  }

  return (
    <div>
      <div>
        <h2>User Profile</h2>

        {loading.user && <div>Loading user...</div>}
        
        {error.user && (
          <div>
            Error loading user: {error.user}
            <button onClick={() => window.location.reload()}>Retry</button>
          </div>
        )}

        {user && !loading.user && (
          <div>
            <img src={user.avatar} alt={user.name} />
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        )}
      </div>

      <div>
        <h3>User Posts</h3>

        {loading.posts && <div>Loading posts...</div>}

        {error.posts && <div>Error loading posts: {error.posts}</div>}

        {posts.length > 0 && !loading.posts && (
          <div>
            {posts.map((post) => (
              <div key={post.id}>
                <h4>{post.title}</h4>
                <p>{post.content}</p>
                <small>{post.date}</small>
              </div>
            ))}
          </div>
        )}

        {posts.length === 0 && !loading.posts && !error.posts && user && (
          <p>No posts found for this user.</p>
        )}
      </div>
    </div>
  );
}

export default UserProfile;
