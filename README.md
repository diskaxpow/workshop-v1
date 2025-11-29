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