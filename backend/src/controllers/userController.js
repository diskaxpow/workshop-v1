const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "081234567890",
    age: 30,
    gender: "male",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "081234567891",
    age: 28,
    gender: "female",
    role: "User",
    status: "Active",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    phone: "081234567892",
    age: 35,
    gender: "male",
    role: "User",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Alice Williams",
    email: "alice@example.com",
    phone: "081234567893",
    age: 32,
    gender: "female",
    role: "Manager",
    status: "Active",
  },
  {
    id: 5,
    name: "Charlie Brown",
    email: "charlie@example.com",
    phone: "081234567894",
    age: 26,
    gender: "male",
    role: "User",
    status: "Active",
  },
];

export const getAllUsers = (req, res) => {
  try {
    const { page = 1, limit = 10, search = "" } = req.query;

    let filteredUsers = users;

    // Filter by search
    if (search) {
      filteredUsers = users.filter(
        (user) =>
          user.name.toLowerCase().includes(search.toLowerCase()) ||
          user.email.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + parseInt(limit);
    const paginatedUsers = filteredUsers.slice(startIndex, endIndex);

    res.json({
      data: paginatedUsers,
      pagination: {
        total: filteredUsers.length,
        page: parseInt(page),
        limit: parseInt(limit),
        totalPages: Math.ceil(filteredUsers.length / limit),
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getUserById = (req, res) => {
  try {
    const { id } = req.params;
    const user = users.find((u) => u.id === parseInt(id));

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const createUser = (req, res) => {
  try {
    const { name, email, phone, age, gender, role, status } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: "Name and email are required" });
    }

    const newUser = {
      id: users.length + 1,
      name,
      email,
      phone: phone || "",
      age: age || 0,
      gender: gender || "",
      role: role || "User",
      status: status || "Active",
    };

    users.push(newUser);

    res.status(201).json({
      message: "User created successfully",
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const updateUser = (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone, age, gender, role, status } = req.body;

    const userIndex = users.findIndex((u) => u.id === parseInt(id));

    if (userIndex === -1) {
      return res.status(404).json({ message: "User not found" });
    }

    users[userIndex] = {
      ...users[userIndex],
      name: name || users[userIndex].name,
      email: email || users[userIndex].email,
      phone: phone || users[userIndex].phone,
      age: age || users[userIndex].age,
      gender: gender || users[userIndex].gender,
      role: role || users[userIndex].role,
      status: status || users[userIndex].status,
    };

    res.json({
      message: "User updated successfully",
      data: users[userIndex],
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const deleteUser = (req, res) => {
  try {
    const { id } = req.params;
    const userIndex = users.findIndex((u) => u.id === parseInt(id));

    if (userIndex === -1) {
      return res.status(404).json({ message: "User not found" });
    }

    users.splice(userIndex, 1);

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
