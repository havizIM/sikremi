-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 31 Jul 2020 pada 20.55
-- Versi server: 10.4.8-MariaDB
-- Versi PHP: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sk_sikremi`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `aplikasi`
--

CREATE TABLE `aplikasi` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `no_aplikasi` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `angunan` enum('BPKB Motor','BPKB Mobil','Surat Tanah') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'BPKB Motor',
  `limit_kredit` double(20,2) NOT NULL,
  `angsuran` double(20,2) NOT NULL,
  `jangka_waktu` int(11) NOT NULL,
  `tgl_aplikasi` date NOT NULL,
  `status` enum('Proses','Terima','Tolak') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Proses',
  `keterangan` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `aplikasi`
--

INSERT INTO `aplikasi` (`id`, `no_aplikasi`, `email`, `angunan`, `limit_kredit`, `angsuran`, `jangka_waktu`, `tgl_aplikasi`, `status`, `keterangan`, `created_at`, `updated_at`, `deleted_at`) VALUES
(4, 'KRJ-20-07-001', '123@gmail.com', 'BPKB Motor', 10000000.00, 800000.00, 12, '2020-07-28', 'Tolak', 'Testtttt', '2020-07-28 10:02:24', '2020-07-31 04:33:02', NULL),
(5, 'KRJ-20-07-002', 'ferry@gmail.com', 'BPKB Motor', 15000000.00, 100.00, 12, '2020-07-29', 'Terima', NULL, '2020-07-29 05:10:31', '2020-07-30 14:34:04', NULL),
(6, 'KRJ-20-07-003', 'muhrizky310@gmail.com', 'BPKB Motor', 10000000.00, 860664.30, 12, '2020-07-29', 'Terima', NULL, '2020-07-29 08:10:42', '2020-07-30 10:19:08', NULL),
(7, 'KRJ-20-07-004', 'setiaku01@gmail.com', 'BPKB Motor', 25000000.00, 2151660.74, 12, '2020-07-31', 'Tolak', 'mohon maaf penganjuan anda kami tolak karena limit yang ada ajukan tidak sesuai', '2020-07-31 09:48:11', '2020-07-31 10:21:18', NULL),
(8, 'KRJ-20-07-005', 'mzackyramadhan@gmail.com', 'BPKB Mobil', 60000000.00, 2659236.62, 24, '2020-07-31', 'Terima', NULL, '2020-07-31 09:54:43', '2020-07-31 10:30:35', NULL),
(9, 'KRJ-20-07-006', 'nurvi_29@yahoo.com', 'Surat Tanah', 200000000.00, 6084387.49, 36, '2020-07-31', 'Tolak', 'Limit Yang anda ajukan tidak sesuai', '2020-07-31 10:09:40', '2020-07-31 10:27:38', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `approval`
--

CREATE TABLE `approval` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `no_approval` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `aplikasi_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `limit_approve` double(20,2) NOT NULL,
  `angsuran_approve` double(20,2) NOT NULL,
  `jangka_waktu_approve` int(2) NOT NULL,
  `tgl_approval` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `approval`
--

INSERT INTO `approval` (`id`, `no_approval`, `aplikasi_id`, `user_id`, `limit_approve`, `angsuran_approve`, `jangka_waktu_approve`, `tgl_approval`, `created_at`, `updated_at`) VALUES
(1, 'APP-00001', 6, 2, 10000000.00, 860664.30, 12, '2020-07-30', '2020-07-30 10:19:08', '2020-07-30 10:19:08'),
(2, 'APP-00002', 5, 2, 10000000.00, 860664.30, 12, '2020-07-30', '2020-07-30 14:34:04', '2020-07-30 14:34:04'),
(3, 'APP-00003', 8, 2, 55000000.00, 2437633.56, 24, '2020-07-31', '2020-07-31 10:30:35', '2020-07-31 10:30:35');

-- --------------------------------------------------------

--
-- Struktur dari tabel `kerabat`
--

CREATE TABLE `kerabat` (
  `aplikasi_id` bigint(20) UNSIGNED NOT NULL,
  `nama_lengkap` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hubungan` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `alamat` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `kota` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `jenis_kelamin` enum('L','P') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'L',
  `telepon` varchar(15) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `kerabat`
--

INSERT INTO `kerabat` (`aplikasi_id`, `nama_lengkap`, `hubungan`, `alamat`, `kota`, `jenis_kelamin`, `telepon`) VALUES
(4, '123', '123', '123', '123', 'P', '123'),
(5, 'Haviz Indra Maulana', 'Sepupu', 'Jl. Rawa Panjang', 'Bogor', 'L', '0213217491'),
(6, 'Haviz Indra Maulana', 'Sepupuh', 'JL. Jembatan Lima No 33 RT 06 RW 30, Kelurahan Jembatan Lima Kecamatan Kota', 'DKI Jakarta', 'L', '083911946154'),
(7, 'Rowando Bagus', 'Sepupuh', 'Jl. Kebagusan Raya No : 12, Kemayoran, Kemayoran', 'Jakarta', 'L', '081931938881'),
(8, 'Muhamad Rizky', 'Adik', 'Jl Kp Melayu Kecil 1 No 85', 'Jakarta', 'L', '08180318592'),
(9, 'Anggina Yudha', 'Kerabat', 'Jl. nyicingelir , cidugang, Kagugus', 'Bandung', 'P', '08894195091');

-- --------------------------------------------------------

--
-- Struktur dari tabel `keuangan`
--

CREATE TABLE `keuangan` (
  `aplikasi_id` bigint(20) UNSIGNED NOT NULL,
  `penghasilan_perbulan` double(15,3) NOT NULL,
  `biaya` double(15,3) NOT NULL,
  `keuntungan` double(15,3) NOT NULL,
  `penghasilan_lainnya` double(15,3) NOT NULL,
  `total_pinjaman_lain` double(15,3) NOT NULL,
  `angsuran_pinjaman_lain` double(15,3) NOT NULL,
  `sisa_waktu_angsuran` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `keuangan`
--

INSERT INTO `keuangan` (`aplikasi_id`, `penghasilan_perbulan`, `biaya`, `keuntungan`, `penghasilan_lainnya`, `total_pinjaman_lain`, `angsuran_pinjaman_lain`, `sisa_waktu_angsuran`) VALUES
(4, 123.000, 123.000, 123.000, 123.000, 123.000, 40.000, 2),
(5, 5000000.000, 2000000.000, 1000000.000, 2000000.000, 0.000, 0.000, 0),
(6, 3600000.000, 2800000.000, 1000000.000, 2500000.000, 12000000.000, 700000.000, 4),
(7, 1500000.000, 2100000.000, 1000000.000, 800000.000, 400000.000, 200000.000, 2),
(8, 4000000.000, 2500000.000, 900000.000, 1500000.000, 950000.000, 200000.000, 2),
(9, 5000000.000, 3000000.000, 1000000.000, 2050100.000, 15000000.000, 1200000.000, 3);

-- --------------------------------------------------------

--
-- Struktur dari tabel `lampiran`
--

CREATE TABLE `lampiran` (
  `aplikasi_id` bigint(20) UNSIGNED NOT NULL,
  `keterangan` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `file` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `lampiran`
--

INSERT INTO `lampiran` (`aplikasi_id`, `keterangan`, `file`) VALUES
(4, 'Foto KTP', '105183_1595955744.jpg'),
(4, 'Foto KK', '104989_1595955744.jpg'),
(4, 'Foto NPWP', '104659_1595955744.jpg'),
(5, 'Foto KTP', '8-84868_abstract-wallpaper-hd-artworks-cool-desktop-images-graphic_1596024631.jpg'),
(5, 'Foto KK', '104659_1596024631.jpg'),
(5, 'Foto NPWP', '104989_1596024631.jpg'),
(6, 'Foto KTP', 'Maiza 2_1596035442.jpeg'),
(6, 'Foto KK', '912622_37-programmer-code-wallpaper-backgrounds-free-download_2560x1600_h_1596035442.png'),
(6, 'Foto NPWP', '105183_1596035442.jpg'),
(6, 'Pas Photo', 'Wallpapper_1_1596035442.png'),
(7, 'Foto KTP', 'Wallpapper_2_1596214091.jpg'),
(7, 'Foto KK', 'Wallpapper_2_1596214091.jpg'),
(7, 'Foto NPWP', 'Wallpapper_2_1596214091.jpg'),
(7, 'Pas Photo', 'Wallpapper_2_1596214091.jpg'),
(8, 'Foto KTP', '8-84868_abstract-wallpaper-hd-artworks-cool-desktop-images-graphic_1596214483.jpg'),
(8, 'Foto KK', '105183_1596214483.jpg'),
(8, 'Foto NPWP', '8-84868_abstract-wallpaper-hd-artworks-cool-desktop-images-graphic_1596214483.jpg'),
(8, 'Pas Photo', '105183_1596214483.jpg'),
(9, 'Foto KTP', '104659_1596215380.jpg'),
(9, 'Foto KK', '104989_1596215380.jpg'),
(9, 'Foto NPWP', '104659_1596215380.jpg'),
(9, 'Pas Photo', '104659_1596215380.jpg');

-- --------------------------------------------------------

--
-- Struktur dari tabel `pasangan`
--

CREATE TABLE `pasangan` (
  `aplikasi_id` bigint(20) UNSIGNED NOT NULL,
  `nama_lengkap` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tempat_lahir` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tgl_lahir` date DEFAULT NULL,
  `pendidikan_terakhir` enum('','Tidak Tamat SD','SD','SMP','SMA','Diploma','Sarjana') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `no_ktp` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pekerjaan` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `penghasilan` double(15,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `pasangan`
--

INSERT INTO `pasangan` (`aplikasi_id`, `nama_lengkap`, `tempat_lahir`, `tgl_lahir`, `pendidikan_terakhir`, `no_ktp`, `pekerjaan`, `penghasilan`) VALUES
(4, NULL, NULL, NULL, '', NULL, NULL, NULL),
(5, 'Dian Ratna Sari', 'Jakarta', '2020-07-29', 'Diploma', '123123123123', 'Ibu Rumah Tanggal', 0.00),
(6, 'Rara Mutiara Aldira', 'Jakarta', '2001-04-07', 'Diploma', '31740404070010005', 'IT Support', 2500000.00),
(7, 'Tiara Alfa Fauzi', 'Batam', '1995-12-04', 'Diploma', '317412004950004', 'Sales Promotion Girls', 1000000.00),
(8, NULL, NULL, NULL, '', NULL, NULL, NULL),
(9, NULL, NULL, NULL, '', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `pemohon`
--

CREATE TABLE `pemohon` (
  `aplikasi_id` bigint(20) UNSIGNED NOT NULL,
  `nama_lengkap` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tempat_lahir` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tgl_lahir` date NOT NULL,
  `pendidikan_terakhir` enum('Tidak Tamat SD','SD','SMP','SMA','Diploma','Sarjana') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'SD',
  `telepon` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `alamat` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `kecamatan` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `kota` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `provinsi` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `kode_pos` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `no_ktp` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `no_npwp` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status_tempat_tinggal` enum('Milik Sendiri','Sewa/Kontrak','Milik Keluarga','Rumah Dinas') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Milik Sendiri',
  `lama_tinggal` enum('<2 tahun','>2 <5 tahun','>5 tahun') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '>5 tahun',
  `status` enum('Menikah','Tidak Menikah','Janda/Duda') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Menikah',
  `jml_tanggungan` int(11) NOT NULL,
  `no_kk` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `pemohon`
--

INSERT INTO `pemohon` (`aplikasi_id`, `nama_lengkap`, `tempat_lahir`, `tgl_lahir`, `pendidikan_terakhir`, `telepon`, `alamat`, `kecamatan`, `kota`, `provinsi`, `kode_pos`, `no_ktp`, `no_npwp`, `status_tempat_tinggal`, `lama_tinggal`, `status`, `jml_tanggungan`, `no_kk`) VALUES
(4, '123', '123', '2020-07-28', 'Tidak Tamat SD', '123', '1231', '123', '123', '123', '123', '123', '123', 'Milik Sendiri', '<2 tahun', 'Menikah', 123, '123'),
(5, 'Ferry Setiawan', 'Jakarta', '2020-07-29', 'Tidak Tamat SD', '021123123', 'Jl. Tempat Raya', 'Tambora', 'Jakarta Barat', 'DKI Jakarta', '11210', '123123123123', '321321321321', 'Milik Sendiri', '<2 tahun', 'Menikah', 3, '13063887319711'),
(6, 'Muhamad Rizky', 'Jakarta', '1997-03-10', 'Sarjana', '08818807135596', 'JL. Kp Melayu kecil no 1 rt 15 rw 10, kelurahan bukit duri', 'Tebet', 'Jakarta', 'DKI Jakarta', '12801', '3174010310970002', '1027748862812', 'Milik Sendiri', '>5 tahun', 'Menikah', 1, '3174011609750003'),
(7, 'Yugi Setiawan', 'Solo', '1997-01-05', 'Sarjana', '0821772946', 'Jl. Pejompongan Dalam No: 75, Kelurahan : Pejompongan,', 'Setiabudi', 'Jakarta', 'DKI Jakarta', '124010', '3174010007970005', '11849000910', 'Milik Sendiri', '>2 <5 tahun', 'Menikah', 2, '3109510230004'),
(8, 'Muhammad Zacky Ramadhan', 'Jakarta', '1995-06-09', 'Sarjana', '089961748294', 'Jl Mangga Besar No 10', 'Kota', 'Jakarta', 'Jakarta', '130110', '3104071109994', '114555135156', 'Milik Sendiri', '>5 tahun', 'Tidak Menikah', 0, '4105550018331'),
(9, 'Nurvianto', 'Jakarta', '1974-05-05', 'Diploma', '0849910495', 'Grand Depok City Blok M21, Depok, Depok', 'Depok', 'Depok', 'Jawa Barat', '11940', '41940002410', '11059910510', 'Milik Sendiri', '>5 tahun', 'Tidak Menikah', 0, '4100588138511');

-- --------------------------------------------------------

--
-- Struktur dari tabel `survey`
--

CREATE TABLE `survey` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `aplikasi_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `no_survey` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `keterangan` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `tgl_survey` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `survey`
--

INSERT INTO `survey` (`id`, `aplikasi_id`, `user_id`, `no_survey`, `keterangan`, `tgl_survey`, `created_at`, `updated_at`) VALUES
(7, 6, 2, 'SRV-20-07-001', 'Test', '2020-07-30', '2020-07-30 05:49:45', '2020-07-30 05:49:45'),
(8, 5, 2, 'SRV-20-07-002', 'Test', '2020-07-30', '2020-07-30 10:53:58', '2020-07-30 10:53:58'),
(9, 4, 2, 'SRV-20-07-003', 'Tidak Sesuai Aplikasi', '2020-07-31', '2020-07-31 04:01:59', '2020-07-31 04:01:59'),
(10, 8, 2, 'SRV-20-07-004', 'done', '2020-07-31', '2020-07-31 10:29:38', '2020-07-31 10:29:38');

-- --------------------------------------------------------

--
-- Struktur dari tabel `survey_detail`
--

CREATE TABLE `survey_detail` (
  `survey_id` bigint(20) NOT NULL,
  `deskripsi_survey` text NOT NULL,
  `check` enum('Y','T') NOT NULL DEFAULT 'T',
  `note` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `survey_detail`
--

INSERT INTO `survey_detail` (`survey_id`, `deskripsi_survey`, `check`, `note`) VALUES
(7, 'Nama Pemohon Sesuai Dengan Aplikasi', 'Y', NULL),
(7, 'Alamat Tempat Tinggal Sesuai', 'Y', NULL),
(7, 'Alamat Tempat Usaha Sesuai', 'Y', NULL),
(7, 'Pekerjaan Pemohon Sesuai', 'Y', NULL),
(7, 'Penghasilan Perbulan Sesuai Aplikasi', 'T', NULL),
(7, 'Lama Tinggal Sesuai Aplikasi', 'T', NULL),
(7, 'Menanyakan Nama Pasangan', 'T', NULL),
(7, 'Menanyakan Pekerjaan Pasangan', 'Y', NULL),
(7, 'Menanyakan Bidang Usaha', 'Y', NULL),
(7, 'Menanyakan Lama Usaha', 'T', NULL),
(7, 'Menanyakan Status Kepemilikan Usaha', 'Y', NULL),
(7, 'Penghasilan Dari Usaha Perbulan', 'T', NULL),
(7, 'Pengeluaran Selama Sebulan', 'T', NULL),
(7, 'Pinjaman Yang Masih Berlaku', 'Y', NULL),
(8, 'Nama Pemohon Sesuai Dengan Aplikasi', 'Y', NULL),
(8, 'Alamat Tempat Tinggal Sesuai', 'Y', NULL),
(8, 'Alamat Tempat Usaha Sesuai', 'Y', NULL),
(8, 'Pekerjaan Pemohon Sesuai', 'T', NULL),
(8, 'Penghasilan Perbulan Sesuai Aplikasi', 'T', NULL),
(8, 'Lama Tinggal Sesuai Aplikasi', 'T', NULL),
(8, 'Menanyakan Nama Pasangan', 'T', NULL),
(8, 'Menanyakan Pekerjaan Pasangan', 'T', NULL),
(8, 'Menanyakan Bidang Usaha', 'T', NULL),
(8, 'Menanyakan Lama Usaha', 'T', NULL),
(8, 'Menanyakan Status Kepemilikan Usaha', 'Y', NULL),
(8, 'Penghasilan Dari Usaha Perbulan', 'Y', NULL),
(8, 'Pengeluaran Selama Sebulan', 'Y', NULL),
(8, 'Pinjaman Yang Masih Berlaku', 'Y', NULL),
(9, 'Nama Pemohon Sesuai Dengan Aplikasi', 'Y', NULL),
(9, 'Alamat Tempat Tinggal Sesuai', 'Y', NULL),
(9, 'Alamat Tempat Usaha Sesuai', 'Y', NULL),
(9, 'Pekerjaan Pemohon Sesuai', 'Y', NULL),
(9, 'Penghasilan Perbulan Sesuai Aplikasi', 'Y', NULL),
(9, 'Lama Tinggal Sesuai Aplikasi', 'Y', NULL),
(9, 'Menanyakan Nama Pasangan', 'Y', NULL),
(9, 'Menanyakan Pekerjaan Pasangan', 'Y', NULL),
(9, 'Menanyakan Bidang Usaha', 'Y', NULL),
(9, 'Menanyakan Lama Usaha', 'Y', NULL),
(9, 'Menanyakan Status Kepemilikan Usaha', 'Y', NULL),
(9, 'Penghasilan Dari Usaha Perbulan', 'Y', NULL),
(9, 'Pengeluaran Selama Sebulan', 'Y', NULL),
(9, 'Pinjaman Yang Masih Berlaku', 'Y', NULL),
(10, 'Nama Pemohon Sesuai Dengan Aplikasi', 'Y', NULL),
(10, 'Alamat Tempat Tinggal Sesuai', 'Y', NULL),
(10, 'Alamat Tempat Usaha Sesuai', 'Y', NULL),
(10, 'Pekerjaan Pemohon Sesuai', 'Y', NULL),
(10, 'Penghasilan Perbulan Sesuai Aplikasi', 'Y', NULL),
(10, 'Lama Tinggal Sesuai Aplikasi', 'Y', NULL),
(10, 'Menanyakan Nama Pasangan', 'Y', NULL),
(10, 'Menanyakan Pekerjaan Pasangan', 'Y', NULL),
(10, 'Menanyakan Bidang Usaha', 'Y', NULL),
(10, 'Menanyakan Lama Usaha', 'Y', NULL),
(10, 'Menanyakan Status Kepemilikan Usaha', 'Y', NULL),
(10, 'Penghasilan Dari Usaha Perbulan', 'Y', NULL),
(10, 'Pengeluaran Selama Sebulan', 'Y', NULL),
(10, 'Pinjaman Yang Masih Berlaku', 'Y', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `survey_foto`
--

CREATE TABLE `survey_foto` (
  `survey_id` bigint(20) UNSIGNED NOT NULL,
  `keterangan` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `file` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `survey_foto`
--

INSERT INTO `survey_foto` (`survey_id`, `keterangan`, `file`) VALUES
(7, 'Foto Tempat Usaha', '105183_1596113385.jpg'),
(7, 'Foto Nasabah + Tempat Usaha', '104989_1596113385.jpg'),
(7, 'Foto Jaminan', '104659_1596113385.jpg'),
(7, 'Foto Barang Jaminan', '8-84868_abstract-wallpaper-hd-artworks-cool-desktop-images-graphic_1596113385.jpg'),
(8, 'Foto Tempat Usaha', '104659_1596131638.jpg'),
(8, 'Foto Nasabah + Tempat Usaha', '104989_1596131638.jpg'),
(8, 'Foto Jaminan', '105183_1596131638.jpg'),
(8, 'Foto Barang Jaminan', '178931_1596131638.jpg'),
(9, 'Foto Tempat Usaha', '8-84868_abstract-wallpaper-hd-artworks-cool-desktop-images-graphic_1596193319.jpg'),
(9, 'Foto Nasabah + Tempat Usaha', '105183_1596193319.jpg'),
(9, 'Foto Jaminan', '104989_1596193319.jpg'),
(9, 'Foto Barang Jaminan', 'Wallpapper_1_1596193319.png'),
(10, 'Foto Tempat Usaha', '104989_1596216578.jpg'),
(10, 'Foto Nasabah + Tempat Usaha', '104989_1596216578.jpg'),
(10, 'Foto Jaminan', '104989_1596216578.jpg'),
(10, 'Foto Barang Jaminan', '104989_1596216578.jpg');

-- --------------------------------------------------------

--
-- Struktur dari tabel `usaha`
--

CREATE TABLE `usaha` (
  `aplikasi_id` bigint(20) UNSIGNED NOT NULL,
  `berusaha_sejak` date NOT NULL,
  `bidang_usaha` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `jml_karyawan` int(11) NOT NULL,
  `alamat` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `telepon` varchar(15) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status_kepemilikan` enum('Milik Sendiri','Sewa/Kontrak','Milik Keluarga') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Milik Sendiri'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `usaha`
--

INSERT INTO `usaha` (`aplikasi_id`, `berusaha_sejak`, `bidang_usaha`, `jml_karyawan`, `alamat`, `telepon`, `status_kepemilikan`) VALUES
(4, '2020-07-28', '123', 123, '123', '123', 'Milik Sendiri'),
(5, '2020-07-29', 'Freelance', 2, 'Jl. Gg Vanilli No 19f', '021123123', 'Milik Sendiri'),
(6, '2005-12-12', 'Ketring Makanan', 10, 'Jl. Bukit Duri Tanjakan No 31 RT 12, RT 05 Kelurahan Bukit Duri Kecamatan Tebet,', '02131924860', 'Milik Sendiri'),
(7, '2018-02-06', 'Makanan', 1, 'Jl. Manggarai Selatan No : 09, Kelurahan : Manggarai', '02193418819', 'Milik Sendiri'),
(8, '2009-03-05', 'Industri', 1, 'Jl. Cilosari No 33', '0213194186', 'Milik Sendiri'),
(9, '2001-12-05', 'Industri', 4, 'Jl. Cibubur Raya No 33, Cibubur, Kerawang', '0219301749', 'Milik Sendiri');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nama_lengkap` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `level` enum('ANALYST','MANAGER','ADMIN') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'ANALYST',
  `active` enum('Y','N') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'N',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id`, `nama_lengkap`, `username`, `password`, `level`, `active`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Muhammad Rizky A', 'm_rizky', '$2y$10$m9r8UL143mYoDnaSXcAUlOFMsnbM5IrYALHuuGX19Ilu0LNMmVRY.', 'ANALYST', 'Y', '2020-07-28 17:00:00', '2020-07-31 07:37:29', NULL),
(2, 'Haviz Indra Maulana', 'haviz_im', '$2y$10$Yt0U7cig5SJM6zOZEMDiN.dhAbshxvl/o4LJVngADAz1iHiG7jvIa', 'MANAGER', 'Y', '2020-07-28 17:00:00', '2020-07-31 05:02:21', NULL),
(3, 'Web Master', 'admin', '$2y$10$m9r8UL143mYoDnaSXcAUlOFMsnbM5IrYALHuuGX19Ilu0LNMmVRY.', 'ADMIN', 'Y', '2020-07-30 17:00:00', NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `verifikasi`
--

CREATE TABLE `verifikasi` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `no_verifikasi` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `aplikasi_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `tgl_verifikasi` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `verifikasi`
--

INSERT INTO `verifikasi` (`id`, `no_verifikasi`, `aplikasi_id`, `user_id`, `tgl_verifikasi`, `created_at`, `updated_at`) VALUES
(1, 'VR-07-20-001', 5, 1, '2020-07-29', '2020-07-28 17:00:00', NULL),
(2, 'VR-00001', 4, 1, '2020-07-29', '2020-07-29 07:45:17', '2020-07-29 07:45:17'),
(3, 'VR-00002', 6, 1, '2020-07-29', '2020-07-29 08:12:23', '2020-07-29 08:12:23'),
(5, 'VR-00003', 8, 1, '2020-07-31', '2020-07-31 10:26:25', '2020-07-31 10:26:25'),
(6, 'VR-00004', 8, 1, '2020-07-31', '2020-07-31 10:26:25', '2020-07-31 10:26:25');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `aplikasi`
--
ALTER TABLE `aplikasi`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `approval`
--
ALTER TABLE `approval`
  ADD PRIMARY KEY (`id`),
  ADD KEY `approval_aplikasi_id_index` (`aplikasi_id`),
  ADD KEY `approval_user_id_index` (`user_id`);

--
-- Indeks untuk tabel `kerabat`
--
ALTER TABLE `kerabat`
  ADD KEY `kerabat_aplikasi_id_index` (`aplikasi_id`);

--
-- Indeks untuk tabel `keuangan`
--
ALTER TABLE `keuangan`
  ADD KEY `keuangan_aplikasi_id_index` (`aplikasi_id`);

--
-- Indeks untuk tabel `lampiran`
--
ALTER TABLE `lampiran`
  ADD KEY `lampiran_aplikasi_id_index` (`aplikasi_id`);

--
-- Indeks untuk tabel `pasangan`
--
ALTER TABLE `pasangan`
  ADD KEY `pasangan_aplikasi_id_index` (`aplikasi_id`);

--
-- Indeks untuk tabel `pemohon`
--
ALTER TABLE `pemohon`
  ADD KEY `pemohon_aplikasi_id_index` (`aplikasi_id`);

--
-- Indeks untuk tabel `survey`
--
ALTER TABLE `survey`
  ADD PRIMARY KEY (`id`),
  ADD KEY `survey_aplikasi_id_index` (`aplikasi_id`),
  ADD KEY `survey_user_id_index` (`user_id`);

--
-- Indeks untuk tabel `survey_detail`
--
ALTER TABLE `survey_detail`
  ADD KEY `survey_id` (`survey_id`);

--
-- Indeks untuk tabel `survey_foto`
--
ALTER TABLE `survey_foto`
  ADD KEY `survey_foto_survey_id_index` (`survey_id`);

--
-- Indeks untuk tabel `usaha`
--
ALTER TABLE `usaha`
  ADD KEY `usaha_aplikasi_id_index` (`aplikasi_id`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `verifikasi`
--
ALTER TABLE `verifikasi`
  ADD PRIMARY KEY (`id`),
  ADD KEY `verifikasi_aplikasi_id_index` (`aplikasi_id`),
  ADD KEY `verifikasi_user_id_index` (`user_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `aplikasi`
--
ALTER TABLE `aplikasi`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT untuk tabel `approval`
--
ALTER TABLE `approval`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `survey`
--
ALTER TABLE `survey`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `verifikasi`
--
ALTER TABLE `verifikasi`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `approval`
--
ALTER TABLE `approval`
  ADD CONSTRAINT `approval_aplikasi_id_foreign` FOREIGN KEY (`aplikasi_id`) REFERENCES `aplikasi` (`id`),
  ADD CONSTRAINT `approval_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Ketidakleluasaan untuk tabel `kerabat`
--
ALTER TABLE `kerabat`
  ADD CONSTRAINT `kerabat_aplikasi_id_foreign` FOREIGN KEY (`aplikasi_id`) REFERENCES `aplikasi` (`id`);

--
-- Ketidakleluasaan untuk tabel `keuangan`
--
ALTER TABLE `keuangan`
  ADD CONSTRAINT `keuangan_aplikasi_id_foreign` FOREIGN KEY (`aplikasi_id`) REFERENCES `aplikasi` (`id`);

--
-- Ketidakleluasaan untuk tabel `lampiran`
--
ALTER TABLE `lampiran`
  ADD CONSTRAINT `lampiran_aplikasi_id_foreign` FOREIGN KEY (`aplikasi_id`) REFERENCES `aplikasi` (`id`);

--
-- Ketidakleluasaan untuk tabel `pasangan`
--
ALTER TABLE `pasangan`
  ADD CONSTRAINT `pasangan_aplikasi_id_foreign` FOREIGN KEY (`aplikasi_id`) REFERENCES `aplikasi` (`id`);

--
-- Ketidakleluasaan untuk tabel `pemohon`
--
ALTER TABLE `pemohon`
  ADD CONSTRAINT `pemohon_aplikasi_id_foreign` FOREIGN KEY (`aplikasi_id`) REFERENCES `aplikasi` (`id`);

--
-- Ketidakleluasaan untuk tabel `survey`
--
ALTER TABLE `survey`
  ADD CONSTRAINT `survey_aplikasi_id_foreign` FOREIGN KEY (`aplikasi_id`) REFERENCES `aplikasi` (`id`),
  ADD CONSTRAINT `survey_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Ketidakleluasaan untuk tabel `survey_foto`
--
ALTER TABLE `survey_foto`
  ADD CONSTRAINT `survey_foto_survey_id_foreign` FOREIGN KEY (`survey_id`) REFERENCES `survey` (`id`);

--
-- Ketidakleluasaan untuk tabel `usaha`
--
ALTER TABLE `usaha`
  ADD CONSTRAINT `usaha_aplikasi_id_foreign` FOREIGN KEY (`aplikasi_id`) REFERENCES `aplikasi` (`id`);

--
-- Ketidakleluasaan untuk tabel `verifikasi`
--
ALTER TABLE `verifikasi`
  ADD CONSTRAINT `verifikasi_aplikasi_id_foreign` FOREIGN KEY (`aplikasi_id`) REFERENCES `aplikasi` (`id`),
  ADD CONSTRAINT `verifikasi_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
