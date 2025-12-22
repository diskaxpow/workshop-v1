import React, { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const UserDialog = ({
  isOpen,
  onClose,
  mode,
  userData,
  onCreateUser,
  onUpdateUser,
}) => {
  // State untuk menyimpan data form
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");

  // Setiap kali dialog dibuka, isi form dengan data user (kalau mode edit)
  useEffect(() => {
    // Hanya update saat dialog dibuka
    if (!isOpen) return;
    if (mode === "edit" && userData) {
      // Kalau mode edit, isi form dengan data user yang mau diedit
      setName(userData.name || "");
      setEmail(userData.email || "");
      setPhone(userData.phone || "");
      setAge(userData.age || "");
      setGender(userData.gender || "");
      setRole(userData.role || "");
    } else {
      // Kalau mode create, kosongkan semua form
      setName("");
      setEmail("");
      setPhone("");
      setAge("");
      setGender("");
      setRole("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]); // Hanya depend pada isOpen, bukan mode dan userData

  // Fungsi untuk submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Kumpulkan semua data form
    const formData = {
      name,
      email,
      phone,
      age: parseInt(age),
      gender,
      role,
    };

    // Panggil handler dari parent (local state)
    if (mode === "edit") {
      onUpdateUser(userData.id, formData);
    } else {
      onCreateUser(formData);
    }

    onClose(); // Tutup dialog
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">
          {mode === "edit" ? "Ubah User" : "Tambah User"}
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Input First Name */}
          <div>
            <label className="block text-sm font-medium mb-1">First Name</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Input Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border rounded px-3 py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Input Phone */}
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          {/* Input Age */}
          <div>
            <label className="block text-sm font-medium mb-1">Age</label>
            <input
              type="number"
              className="w-full border rounded px-3 py-2"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>

          {/* Select Gender */}
          <div>
            <label className="block text-sm font-medium mb-1">Gender</label>
            <Select value={gender} onValueChange={setGender}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Pilih Jenis Kelamin" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male (ชาย)</SelectItem>
                <SelectItem value="female">Female (หญิง)</SelectItem>
                <SelectItem value="tom">Tom (ทอม)</SelectItem>
                <SelectItem value="dee">Dee (ดี้)</SelectItem>
                <SelectItem value="adam">Adam (อดัม)</SelectItem>
                <SelectItem value="anggy">Anggay (แองจี้)</SelectItem>
                <SelectItem value="gay_king">Gay King (เกย์คิง)</SelectItem>
                <SelectItem value="gay_queen">Gay Queen (เกย์ควีน)</SelectItem>
                <SelectItem value="lesbian">Lesbian (เลสเบี้ยน)</SelectItem>
                <SelectItem value="kathoey">Kathoey (กะเทย)</SelectItem>
                <SelectItem value="ladyboy">Ladyboy (เลดี้บอย)</SelectItem>
                <SelectItem value="two_spirit">
                  Two-Spirit (สองจิตสองใจ)
                </SelectItem>
                <SelectItem value="bisexual">Bisexual (ไบเซ็กชวล)</SelectItem>
                <SelectItem value="pansexual">
                  Pansexual (แพนเซ็กชวล)
                </SelectItem>
                <SelectItem value="asexual">Asexual (ไม่มีเพศ)</SelectItem>
                <SelectItem value="intersex">
                  Intersex (อินเตอร์เซ็กซ์)
                </SelectItem>
                <SelectItem value="non_binary">
                  Non-binary (ไม่ใช่ชายหรือหญิง)
                </SelectItem>
                <SelectItem value="questioning">
                  Questioning (กำลังค้นหา)
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Select Role */}
          <div>
            <label className="block text-sm font-medium mb-1">Role</label>
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Pilih Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Admin">Admin</SelectItem>
                <SelectItem value="User">User</SelectItem>
                <SelectItem value="Manager">Manager</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Tombol Cancel dan Submit */}
          <div className="flex gap-2 justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded hover:bg-gray-100"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              {mode === "edit" ? "Update" : "Simpan"}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UserDialog;
