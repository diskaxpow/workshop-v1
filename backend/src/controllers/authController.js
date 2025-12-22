let users = [
  {
    id: 1,
    email: "admin@example.com",
    password: "admin123", // In production, this should be hashed
    name: "Admin User",
    role: "admin",
  },
  {
    id: 2,
    email: "user@example.com",
    password: "user123",
    name: "Regular User",
    role: "user",
  },
];

export const login = (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate token (simplified - in production use JWT)
    const token = `token_${user.id}_${Date.now()}`;

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const register = (req, res) => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = users.find((u) => u.email === email);
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = {
      id: users.length + 1,
      email,
      password, // In production, hash this
      name,
      role: "user",
    };

    users.push(newUser);

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
        role: newUser.role,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const logout = (req, res) => {
  res.json({ message: "Logout successful" });
};
