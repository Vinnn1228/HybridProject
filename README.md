# Dokumentasi Proyek Aplikasi Home Services

Markdown

# Aplikasi Home Services

## Identitas Mahasiswa

- **Nama**: Gavin Indra Artajaya
- **Nim**: 2802419912
- **Kelas**: LA95
- **Mata Kuliah**: Hybrid Application Development

## Tema Aplikasi

Aplikasi ini bertema **Home Services** (Pemesanan Service Rumah Tangga). Platform ini dirancang untuk memudahkan masyarakat urban dalam mencari dan memesan jasa teknisi profesional secara _on-demand_, mulai dari perbaikan AC, instalasi pipa ledeng, kelistrikan, hingga jasa pembersihan rumah. Aplikasi ini dibangun secara hybrid menggunakan React Native (Expo) dengan design yang modern dan minimalis.

## Tangkapan Layar (Screenshots)

#### Login Screen

![Auth](/screenshots/login.png)
![Auth](/screenshots/regist.png)

#### Home Screen

![Home](/screenshots/home.png)

#### Detail Service

![Service](/screenshots/service.png)

#### Booking History

![History](/screenshots/history.png)

#### Profile

![Profile](/screenshots/profile.png)

## Cara Memakai Aplikasi (Alur Pengguna)

Aplikasi ini didesain dengan alur yang sangat intuitif agar pengguna dapat menyelesaikan masalah rumah tangganya dengan cepat. Berikut adalah simulasi alur penggunaan aplikasi dari awal hingga akhir:

**1. Autentikasi Akun (Login / Register)**

- Saat pertama kali membuka aplikasi, pengguna akan disambut oleh layar Autentikasi.
- Pengguna baru dapat menekan tab **"Sign Up"** untuk mendaftarkan nama dan _password_, sementara pengguna lama dapat langsung menggunakan tab **"Sign In"**.
- Aplikasi dilengkapi validasi form (seperti _password_ minimal 6 karakter). Setelah berhasil masuk, pengguna otomatis diarahkan ke halaman Beranda.

**2. Eksplorasi Layanan di Beranda (Home)**

- Di halaman Beranda, pengguna disajikan ucapan selamat datang, _banner_ promo yang sedang berlangsung, dan kolom pencarian untuk mengetikkan masalah mereka.
- Pengguna dapat memilih jasa yang dibutuhkan melalui _grid_ **Categories** (misal: _Appliance Repair_, _Plumbing_, _Electrical_, _Cleaning_).
- Saat pengguna menekan salah satu ikon kategori, mereka akan dibawa ke halaman Detail Servis.

**3. Melihat Detail & Memesan (Service Detail)**

- Pada halaman ini, pengguna dapat melihat detail komprehensif mengenai servis yang dipilih, termasuk _rating_, jumlah ulasan, dan deskripsi pengerjaan.
- Tersedia daftar **"What's included"** yang memberikan transparansi mengenai fasilitas apa saja yang akan didapat pelanggan (seperti inspeksi, pembersihan, dan garansi).
- Setelah setuju dengan estimasi harga di bagian bawah layar, pengguna dapat menekan tombol utama **"Book Service"** untuk membuat pesanan.

**4. Melacak Riwayat Pesanan (Booking History)**

- Melalui menu navigasi bawah, pengguna dapat membuka halaman **History** untuk memantau status pesanan mereka.
- Terdapat dua _tab switcher_:
  - **Upcoming**: Menampilkan daftar pesanan yang belum/sedang dikerjakan. Pengguna dapat menekan tombol _Track_ untuk melacaknya.
  - **Completed**: Menampilkan riwayat pesanan di masa lalu. Pengguna dapat menekan tombol _Rebook_ untuk memesan ulang teknisi yang sama dengan cepat.

**5. Mengelola Akun (Profile & Logout)**

- Halaman **Profile** berisi identitas pengguna dan beberapa menu pengaturan cepat yang terbagi dalam kategori _Account Settings_ (Alamat, Pembayaran, Notifikasi) dan _General_ (Bantuan, Kebijakan Privasi).
- Jika pengguna menekan tombol **"Log Out"** berwarna merah di bagian bawah, sistem akan secara otomatis mengakhiri sesi dan mengembalikan pengguna ke halaman Login awal.

## Penjelasan Konsep React Native

**Cara Kerja React Native**
React Native adalah kerangka kerja framework berbasis JavaScript yang digunakan untuk membangun aplikasi mobile lintas platform (iOS dan Android) menggunakan satu basis kode (HTML/CSS/JS). Alih-alih merender tampilan menggunakan web view (seperti Cordova/Ionic), React Native berinteraksi dengan API komponen asli native bawaan Android (Java/Kotlin) dan iOS (Objective-C/Swift). Komunikasi antara kode JavaScript dan komponen asli ini dijembatani oleh arsitektur _Bridge_ (atau JSI pada arsitektur terbaru), sehingga aplikasi dapat berjalan dengan lancar selayaknya aplikasi asli.

**3 Keunggulan React Native untuk Aplikasi Hybrid:**

1. **Reusabilitas Kode Lintas Platform:** Sekitar 90% kode JavaScript dapat digunakan kembali (_code sharing_) antara Android dan iOS. Hal ini mempercepat siklus rilis dan memangkas biaya _development_.
2. **Kinerja Mendekati Native:** Karena React Native menggunakan komponen antarmuka _native_ di bawah kapnya (misalnya `<ScrollView>` dirender menjadi `UIScrollView` di iOS), kinerjanya sangat mulus dibanding framework berbasis Web-View.
3. **Hot Reloading / Fast Refresh:** Memungkinkan _developer_ melihat perubahan antarmuka secara instan setelah menyimpan kode (_save_), tanpa perlu me-_rebuild_ keseluruhan aplikasi dari awal.

**Komponen, Props, State, dan Navigasi beserta Contohnya:**

- **1. Komponen (Components):**
  Komponen adalah blok penyusun dasar UI pada React. Komponen bisa digunakan berulang kali (_reusable_).
  _Contoh dari kode aplikasi ini:_ Kita membuat komponen tombol yang bisa dipakai di halaman mana saja.

  ```tsx
  // src/components/PrimaryButton.tsx
  export const PrimaryButton = ({ title, onPress }: PrimaryButtonProps) => {
    return (
      <TouchableOpacity
        className="bg-copper py-3.5 rounded-xl"
        onPress="{onPress}"
      >
        <Text className="text-white font-bold">{title}</Text>
      </TouchableOpacity>
    );
  };
  ```

- **2. Props (Properties):**
  Props adalah data yang dilemparkan dari komponen induk ke komponen anak. Sifatnya _read-only_ bagi si penerima.
  _Contoh dari kode aplikasi ini:_ Melemparkan data `title` bertuliskan "Book Service" ke komponen tombol.

  ```tsx
  // Di dalam service.tsx
  <PrimaryButton onPress="{()" title="Book Service"> router.push("/booking")} />
  ```

- **3. State:**
  State adalah data lokal internal di dalam komponen yang bisa berubah-ubah, misalnya akibat input dari pengguna. Jika State berubah, React akan me-render ulang komponen tersebut.
  _Contoh dari kode aplikasi ini:_ Menyimpan inputan pencarian pengguna.

  ```tsx
  // Di dalam index.tsx
  const [searchQuery, setSearchQuery] = useState("");

  <CustomInput onChangeText="{setSearchQuery}" value="{searchQuery}" />;
  ```

- **4. Navigasi (Navigation):**
  Navigasi adalah sistem untuk berpindah-pindah antar layar. Pada proyek ini, kita menggunakan `expo-router` yang berbasis sistem berkas (_file-based routing_).
  _Contoh dari kode aplikasi ini:_ Berpindah menggunakan fungsi `router.push()` atau `router.back()`.
  ```tsx
  import { router } from "expo-router";

  // Pindah ke layar profil
  onPress={() => router.push("/(tabs)/profile")}

  // Kembali ke layar sebelumnya
  onPress={() => router.back()}
  ```

---

## Analisis Kebutuhan

**1. Deskripsi Masalah**
Masyarakat kota modern sering mengalami kesulitan mencari teknisi rumah tangga (AC, ledeng, listrik, kebersihan) yang terpercaya, tepat waktu, dan memiliki transparansi harga yang jelas. Proses pemesanan melalui telepon konvensional rentan akan miskomunikasi dan sulit untuk melacak status pengerjaan atau riwayat pesanan sebelumnya.

**2. Target Pengguna**

- Pemilik rumah tangga tangga atau penghuni apartemen.
- Pekerja kantoran dan profesional yang memiliki mobilitas tinggi dan jadwal padat, sehingga membutuhkan layanan yang praktis (on-demand).
- Pengguna _smartphone_ dengan rentang usia 20 - 55 tahun.

**3. Kebutuhan Pengguna (User Requirements)**

1.  Pengguna perlu mencari atau memilih kategori layanan yang spesifik secara cepat (misal: _Plumbing_, _Appliance Repair_).
2.  Pengguna perlu melihat detail layanan, fasilitas yang didapat (_what's included_), penilaian ulasan teknisi, beserta estimasi harga sebelum memesan.
3.  Pengguna perlu memasukkan data diri atau membuat akun untuk melacak pesanannya.
4.  Pengguna perlu memantau status pesanannya saat ini (_Upcoming_) serta riwayat pesanan di masa lalu (_Completed_).
5.  Pengguna perlu mengelola profil, alamat rumah, preferensi pembayaran, dan pengaturan aplikasi.

**4. Pemetaan Kebutuhan ke Layar dan Komponen**

| Kebutuhan                       | Layar Terkait (Screen)  | Komponen Terkait                                                                                    |
| :------------------------------ | :---------------------- | :-------------------------------------------------------------------------------------------------- |
| Memilih & Mencari Kategori Jasa | `index.tsx` (Home)      | `CustomInput` (Search bar), Kategori Grid dengan `TouchableOpacity` & `Ionicons`.                   |
| Melihat Detail & Harga Servis   | `service.tsx` (Detail)  | Teks Deskripsi, Harga, `PrimaryButton` (Book Service).                                              |
| Autentikasi Pengguna            | `login.tsx` (Auth)      | `CustomInput` (Username/Password), `PrimaryButton` (Sign In), `AlertBox` (Notifikasi error/sukses). |
| Pantau Pesanan Aktif & Riwayat  | `history.tsx` (History) | Tab Switcher, View Card (Detail Pesanan), `PrimaryButton` (Varian outline untuk aksi Track/Rebook). |
| Mengelola Profil & Pengaturan   | `profile.tsx` (Profile) | `MenuItem` (Reusable lokal), Card Identitas User.                                                   |

**5. Alasan Keputusan Desain**

- **Implementasi Functional Component & Hooks:** Kode dirombak penuh menggunakan fungsi dan `useState` untuk memastikan kode modern, efisien, minim _boilerplate_, serta mematuhi standar industri (_clean code_).
- **Reusable Components:** Komponen yang dipanggil lebih dari satu kali (`AlertBox`, `PrimaryButton`, `CustomInput`) dienkapsulasi pada folder `src/components`. Ini mencegah duplikasi UI, mempermudah pemeliharaan, serta menjamin konsistensi tata letak.
- **Pemisahan Data Statis:** Data seperti daftar kategori, daftar teknisi unggulan, dan detail pesanan (_booking_) diisolasi ke dalam `src/constants/data.ts`. Hal ini untuk mempersiapkan aplikasi agar mudah beradaptasi apabila nantinya ingin diintegrasikan dengan pemanggilan data dari API eksternal (_backend_).
- **Pemilihan Warna:** Palet warna bernuansa alam yang terdiri dari _Cream_, _Moss Green_, _Sage Green_, dan _Copper_ sengaja dipilih guna memancarkan kesan ramah, amanah, kebersihan, serta profesionalisme jasa teknisi dan asisten rumah tangga.

**6. Rencana Pengembangan (Future Plans)**

1.  **Integrasi Backend & API Server:** Mengganti berkas `data.ts` dengan panggilan ke RESTful API atau GraphQL menggunakan layanan basis data nyata misal: Firebase atau Supabase
2.  **Sistem Pembayaran Daring (Payment Gateway):** Menghubungkan tombol "Book Service" dengan layanan pembayaran seperti Midtrans atau Stripe agar pengguna dapat membayar via dompet digital (OVO/GoPay) dan transfer bank.
3.  **Real-Time Tracking & Chat:** Menyediakan antarmuka percakapan (_chat_) antara teknisi dengan pengguna dalam aplikasi, serta fitur pelacakan lokasi berbasis GPS untuk memastikan teknisi sedang dalam perjalanan.
