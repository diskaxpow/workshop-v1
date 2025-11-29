# TATA CARA PUSH & PULL GITHUB

Dokumen ini berisi langkah-langkah dasar untuk melakukan git push dan git pull pada repository GitHub, khususnya untuk penggunaan pertama kali.

## INITIATION AND PUSH

Jika proyek belum memiliki Git repository, lakukan:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/NAMA-REPO.git
git push -u origin main
```

## PUSH

```
git add .
git commit -m "Update project"
git push
```

## PULL

```
git pull origin main
```

## CARA MEMBUAT BRANCH SENDIRI
#### 1. Cek branch yang tersedia
```
git branch
```
#### 2. Buat branch baru
```
git branch nama-branch-kamu
```
EXAMPLE
```
git branch feature/login-page
```

#### 3. Pindah ke branch tersebut
```
git checkout nama-branch-kamu
```
#### 4. Push branch ke GitHub (pertama kali)
```
git push -u origin nama-branch-kamu
```

#### 5. Push berikutnya (setelah branch terhubung)
```
git push
```

## 📝 4. Tips Penting!!!

### 1. Selalu lakukan git pull sebelum mulai coding.

### 2. Gunakan commit message yang jelas.

### 3. Pastikan posisi branch sesuai sebelum push:

```
git branch
```
### 4. Jika terjadi conflict, selesaikan lalu commit kembali:
```
git add .
git commit -m "Fix merge conflict"
git push
```

## 🎉 Selesai!

README ini mencakup cara dasar menggunakan Git (push & pull) untuk pertama kali.
Silakan sesuaikan URL repository dan branch sesuai kebutuhan proyek kamu.