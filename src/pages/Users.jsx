/* eslint-disable react-hooks/set-state-in-effect */
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { userApi } from "@/services/api";
import { toast } from "sonner";
import UserDialog from "@/components/widgets/userDialog";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogMode, setDialogMode] = useState("create");
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchUsers = () => {
    setLoading(true);
    userApi
      .getUsers()
      .then((res) => {
        setTimeout(() => {
          setUsers(res.data || res);
          console.log("datanya disini", res);
          setLoading(false);
          toast.success("Users fetched successfully", { duration: 3000 });
        }, 1000);
      })
      .catch(() => {
        setTimeout(() => {
          setLoading(false);
          toast.error("Failed to fetch users");
        }, 1000);
      });
  };

  const handleAddUser = () => {
    setDialogMode("create");
    setSelectedUser(null);
    setIsDialogOpen(true);
  };

  // Fungsi untuk handle create user baru
  const handleCreateUser = async (newUserData) => {
    try {
      const response = await userApi.createUser(newUserData);
      // Refresh data dari server
      fetchUsers();
      toast.success("User berhasil ditambahkan!");
    } catch (error) {
      toast.error("Gagal menambahkan user");
      console.error(error);
    }
  };

  const handleEdit = (user) => {
    setDialogMode("edit");
    setSelectedUser(user);
    setIsDialogOpen(true);
  };

  // Fungsi untuk handle update user
  const handleUpdateUser = async (userId, updatedData) => {
    try {
      await userApi.updateUser(userId, updatedData);
      // Refresh data dari server
      fetchUsers();
      toast.success("User berhasil diupdate!");
    } catch (error) {
      toast.error("Gagal mengupdate user");
      console.error(error);
    }
  };

  const handleDelete = async (user) => {
    try {
      await userApi.deleteUser(user.id);
      // Refresh data dari server
      fetchUsers();
      toast.success(`User ${user.name} berhasil dihapus!`);
    } catch (error) {
      toast.error("Gagal menghapus user");
      console.error(error);
    }
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setSelectedUser(null);
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <>
      <div>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-5xl font-bold mb-2">Users</h1>
            <div className="text-2xl font-light">
              Lihat dan kelola data users
            </div>
          </div>
          <div>
            <div className="rounded-full bg-primary items-center justify-center p-2 px-5 flex">
              <Plus className="text-white" />
              <Button onClick={handleAddUser}>Create User</Button>
            </div>
          </div>
        </div>
        <Card className="my-6">
          <CardContent className="p-0">
            <div className="overflow-y-auto">
              <table className="w-full p-0 text-sm">
                <thead className="bg-gray-100 border-b">
                  <tr>
                    <th className="text-left p-4 font-semibold">First Name</th>
                    <th className="text-left p-4 font-semibold">Email</th>
                    <th className="text-left p-4 font-semibold">Phone</th>
                    <th className="text-left p-4 font-semibold">Age</th>
                    <th className="text-left p-4 font-semibold">Gender</th>
                    <th className="text-left p-4 font-semibold">Role</th>
                    <th className="text-center p-4 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="7" className="p-4 text-center">
                        Loading...
                      </td>
                    </tr>
                  ) : users.length === 0 ? (
                    <tr>
                      <td colSpan="7" className="p-4 text-center">
                        No users found
                      </td>
                    </tr>
                  ) : (
                    users.map((variable) => (
                      <tr
                        key={variable.id}
                        className="border-b hover:bg-gray-50"
                      >
                        <td className="p-4">{variable.name}</td>
                        <td className="p-4">{variable.email}</td>
                        <td className="p-4">{variable.phone}</td>
                        <td className="p-4">{variable.age}</td>
                        <td className="p-4">{variable.gender}</td>
                        <td className="p-4">{variable.role}</td>
                        <td className="p-4 text-center">
                          <Button
                            onClick={() => handleEdit(variable)}
                            variant="outline"
                            size="sm"
                            className="mr-2"
                          >
                            Edit
                          </Button>
                          <Button
                            onClick={() => handleDelete(variable)}
                            variant="destructive"
                            size="sm"
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
        <UserDialog
          key={`${dialogMode}-${selectedUser?.id || "new"}`}
          isOpen={isDialogOpen}
          onClose={handleDialogClose}
          mode={dialogMode}
          userData={selectedUser}
          onCreateUser={handleCreateUser}
          onUpdateUser={handleUpdateUser}
        />
      </div>
    </>
  );
};

export default Users;
